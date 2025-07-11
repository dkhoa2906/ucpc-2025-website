package vn.edu.uit.ucpc.authservice.dto.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class TeamInfoUpdateRequest {
    @NotBlank(message = "Team name is required.")
    String teamName;

    @NotBlank(message = "Instructor name is required.")
    String instructorName;

    @NotBlank(message = "Instructor email is required.")
    @Email(message = "Invalid instructor email format.")
    String instructorEmail;

    @NotBlank(message = "Instructor phone is required.")
    @Pattern(regexp = "^\\d{10}$", message = "Instructor phone number must be 10 digits.")
    String instructorPhone;

    @NotBlank(message = "Level is required (highschool or university).")
    String level;

    @NotNull(message = "Members list cannot be null.")
    @Size(min = 3, max = 3, message = "A team must have exactly 3 members.")
    @Valid // Ensures validation is applied to each Member object in the list
    List<Member> members;
}