package vn.edu.uit.ucpc.authservice.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Data
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class MemberData {
    String fullName;
    String email;
    String phone;
    LocalDate birth;
    String university;
    String studentId;
    String CCCD;
}
