package vn.edu.uit.ucpc.authservice.service;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import vn.edu.uit.ucpc.authservice.dto.request.LoginRequest;
import vn.edu.uit.ucpc.authservice.dto.response.BaseResponse;
import vn.edu.uit.ucpc.authservice.dto.response.TokenData;
import vn.edu.uit.ucpc.authservice.entity.RefreshToken;
import vn.edu.uit.ucpc.authservice.entity.AppUser;
import vn.edu.uit.ucpc.authservice.mapper.UserMapper;
import vn.edu.uit.ucpc.authservice.repository.RefreshTokenRepository;
import vn.edu.uit.ucpc.authservice.repository.AppUserRepository;
import vn.edu.uit.ucpc.authservice.util.JwtUtil;
import vn.edu.uit.ucpc.authservice.util.PasswordUtil;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthService {

    AppUserRepository appUserRepository;
    RefreshTokenRepository refreshTokenRepository;
    UserMapper userMapper;
    JwtUtil jwtUtil;
    PasswordUtil passwordUtil;

    public ResponseEntity<BaseResponse<TokenData>> login(LoginRequest request) {

        AppUser appUser = appUserRepository.findByEmail(request.getEmail())
                .orElse(null);

        if (appUser == null || !passwordUtil.verifyPassword(request.getPassword(), appUser.getPasswordHash()))
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(
                    BaseResponse.<TokenData>builder()
                            .message("Invalid credentials")
                            .build()
            );

        String accessToken = jwtUtil.generateAccessToken(appUser.getEmail(), appUser.getRole(), appUser.getStatus());

        String refreshToken = jwtUtil.generateRefreshToken(appUser.getEmail());

        return ResponseEntity.status(HttpStatus.OK).body(
                BaseResponse.<TokenData>builder()
                        .message("Login successfully")
                        .data(TokenData.builder()
                                .accessToken(accessToken)
                                .refreshToken(refreshToken)
                                .build())
                        .build()
        );
    }

    public ResponseEntity<BaseResponse<TokenData>> refreshToken(String refreshToken) {
        if (!jwtUtil.validateToken(refreshToken, "refresh")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(
                    BaseResponse.<TokenData>builder()
                            .message("Invalid or expired refresh token")
                            .build()
            );
        }

        String userEmail = jwtUtil.extractClaim(refreshToken, "sub");
        AppUser appUser = appUserRepository.findByEmail(userEmail).orElse(null);

        if (appUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(
                    BaseResponse.<TokenData>builder()
                            .message("User not found")
                            .build()
            );
        }

        // Invalidate the old refresh token (optional, depending on your security policy)
        refreshTokenRepository.findByToken(refreshToken).ifPresent(token -> {
            token.setRevoked(true);
            refreshTokenRepository.save(token);
        });

        String newAccessToken = jwtUtil.generateAccessToken(appUser.getEmail(), appUser.getRole(), appUser.getStatus());
        String newRefreshToken = jwtUtil.generateRefreshToken(appUser.getEmail());

        // Save the new refresh token
        RefreshToken newRefreshTokenEntity = new RefreshToken();
        newRefreshTokenEntity.setToken(newRefreshToken);
        newRefreshTokenEntity.setUser(appUser);
        newRefreshTokenEntity.setExpiryDate(LocalDateTime.now().plusDays(7)); // Assuming 7 days expiry
        newRefreshTokenEntity.setCreatedAt(LocalDateTime.now());
        newRefreshTokenEntity.setRevoked(false);
        refreshTokenRepository.save(newRefreshTokenEntity);

        return ResponseEntity.status(HttpStatus.OK).body(
                BaseResponse.<TokenData>builder()
                        .message("Token refreshed successfully")
                        .data(TokenData.builder()
                                .accessToken(newAccessToken)
                                .refreshToken(newRefreshToken)
                                .build())
                        .build()
        );
    }
}
