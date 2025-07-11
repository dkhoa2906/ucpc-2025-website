package vn.edu.uit.ucpc.authservice.dto.response;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UserData {
    String id;
    String email;
    String fullName;
    String role;
    String status;
    String createdAt;
    TeamData team; // New field
}