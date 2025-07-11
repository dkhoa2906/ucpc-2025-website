package vn.edu.uit.ucpc.authservice.controller;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.edu.uit.ucpc.authservice.dto.request.LoginRequest;
import vn.edu.uit.ucpc.authservice.dto.response.BaseResponse;
import vn.edu.uit.ucpc.authservice.dto.response.TokenData;
import vn.edu.uit.ucpc.authservice.service.AuthService;

@RequestMapping("/auth")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RestController
public class AuthController {
    AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<BaseResponse<TokenData>> login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }

    @PostMapping("/token-refresh")
    public ResponseEntity<BaseResponse<TokenData>> refreshToken(@RequestParam String refreshToken) {
        return authService.refreshToken(refreshToken);
    }
}