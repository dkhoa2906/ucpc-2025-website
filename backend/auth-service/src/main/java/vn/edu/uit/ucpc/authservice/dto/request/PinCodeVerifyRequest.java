package vn.edu.uit.ucpc.authservice.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;
import org.hibernate.validator.constraints.Length;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class PinCodeVerifyRequest {
    @NotBlank
    @Email
    String email;

    @NotBlank
    @Length(min = 6, max = 6)
    String pinCode;
}
