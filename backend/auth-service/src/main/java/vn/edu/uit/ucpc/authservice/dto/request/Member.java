package vn.edu.uit.ucpc.authservice.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Member {
    @NotBlank(message = "Full name is required.")
    String fullName;

    @NotBlank(message = "Email is required.")
    @Email(message = "Invalid email format.")
    String email;

    @NotBlank(message = "Phone number is required.")
    @Pattern(regexp = "^\\d{10}$", message = "Phone number must be 10 digits.")
    String phone;

    @NotNull(message = "Date of birth is required.")
    LocalDate birth;

    @NotBlank(message = "University is required.")
    String university;

    String studentId; // Optional for high school students

    @NotBlank(message = "CCCD is required.")
    String CCCD;
}
