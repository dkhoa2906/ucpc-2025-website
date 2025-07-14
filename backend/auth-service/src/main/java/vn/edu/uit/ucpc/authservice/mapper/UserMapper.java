package vn.edu.uit.ucpc.authservice.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;
import vn.edu.uit.ucpc.authservice.dto.request.RegistrationRequest;
import vn.edu.uit.ucpc.authservice.dto.response.MemberData;
import vn.edu.uit.ucpc.authservice.dto.response.TeamData;
import vn.edu.uit.ucpc.authservice.dto.response.UserData;
import vn.edu.uit.ucpc.authservice.entity.AppUser;
import vn.edu.uit.ucpc.authservice.entity.Member;
import vn.edu.uit.ucpc.authservice.entity.Team;


@Mapper(componentModel = "spring")
public interface UserMapper {
    @Mapping(target = "passwordHash", source = "password")
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "role", ignore = true)
    @Mapping(target = "status", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "team", ignore = true)
    @Mapping(target = "paymentStatus", ignore = true)
    AppUser toUser(RegistrationRequest request);

    @Mapping(source = "team", target = "team")
    UserData toUserData(AppUser user);

    TeamData toTeamData(Team team);
    MemberData toMemberData(Member member);
}