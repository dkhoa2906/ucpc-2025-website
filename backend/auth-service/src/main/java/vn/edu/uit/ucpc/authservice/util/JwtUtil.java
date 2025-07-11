package vn.edu.uit.ucpc.authservice.util;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;
import vn.edu.uit.ucpc.authservice.enums.Role;
import vn.edu.uit.ucpc.authservice.enums.UserStatus;

import java.util.Date;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class JwtUtil {

    static String JWT_SECRET = "your_secret_key";
    static long ACCESS_TOKEN_EXP_MS = 15 * 60 * 1000;  // 15 mins
    static long REFRESH_TOKEN_EXP_MS = 7 * 24 * 60 * 60 * 1000;  // 7 days

    public String generateAccessToken(String email, Role role, UserStatus status) {
        return JWT.create()
                .withSubject(email)
                .withClaim("role", role.name())
                .withClaim("status", status.name())
                .withClaim("type", "access")
                .withIssuedAt(new Date())
                .withExpiresAt(new Date(System.currentTimeMillis() + ACCESS_TOKEN_EXP_MS))
                .sign(Algorithm.HMAC256(JWT_SECRET));
    }

    public String generateRefreshToken(String email) {
        return JWT.create()
                .withSubject(email)
                .withClaim("type", "refresh")
                .withIssuedAt(new Date())
                .withExpiresAt(new Date(System.currentTimeMillis() + REFRESH_TOKEN_EXP_MS))
                .sign(Algorithm.HMAC256(JWT_SECRET));
    }

    public boolean validateToken(String token, String expectedType) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(JWT_SECRET);
            JWTVerifier verifier = JWT.require(algorithm).build();
            DecodedJWT decodedJWT = verifier.verify(token);

            String tokenType = decodedJWT.getClaim("type").asString();

            if (tokenType == null || !tokenType.equals(expectedType))
                return false;

            Date expirationDate = decodedJWT.getExpiresAt();

            return expirationDate != null && !expirationDate.before(new Date());

        } catch (Exception e) {
            return false;
        }
    }

    public String extractClaim(String token, String claim) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(JWT_SECRET);
            JWTVerifier verifier = JWT.require(algorithm).build();
            DecodedJWT decodedJWT = verifier.verify(token);
            return decodedJWT.getClaim(claim).asString();
        } catch (Exception e) {
            return null;
        }
    }

    }
