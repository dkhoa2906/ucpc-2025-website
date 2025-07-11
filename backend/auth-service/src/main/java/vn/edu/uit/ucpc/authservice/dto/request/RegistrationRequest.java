package vn.edu.uit.ucpc.authservice.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RegistrationRequest {

    @Schema(description = "User's email", example = "example@gmail.com")
    @NotBlank(message = "Email is required.")
    @Email(message = "Invalid email format.")
    String email;

    @Schema(description = "User's password", example = "Password123$")
    @NotBlank(message = "Password is required.")
    @Size(min = 8, message = "Password must be at least 8 characters.")
    String password;

    @Schema(description = "User's full name", example = "Nguyễn Văn A")
    @NotBlank(message = "Fullname is required.")
    String fullName;

    @Schema(description = "PIN code for email verification", example = "123456")
    @NotBlank(message = "PIN code is required.")
    @Size(min = 6, max = 6, message = "PIN code must be 6 digits.")
    String pinCode;

}

