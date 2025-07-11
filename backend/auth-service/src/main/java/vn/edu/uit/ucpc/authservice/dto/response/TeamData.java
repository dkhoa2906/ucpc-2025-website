package vn.edu.uit.ucpc.authservice.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class TeamData {
    String teamName;
    String instructorName;
    String instructorEmail;
    String instructorPhone;
    String level;
    List<MemberData> members;
}
