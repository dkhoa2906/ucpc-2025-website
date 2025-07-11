package vn.edu.uit.ucpc.authservice.service;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vn.edu.uit.ucpc.authservice.dto.request.Member;
import vn.edu.uit.ucpc.authservice.dto.request.TeamInfoUpdateRequest;
import vn.edu.uit.ucpc.authservice.dto.response.BaseResponse;
import vn.edu.uit.ucpc.authservice.dto.response.UserData;
import vn.edu.uit.ucpc.authservice.entity.AppUser;
import vn.edu.uit.ucpc.authservice.entity.Team;
import vn.edu.uit.ucpc.authservice.enums.UserStatus;
import vn.edu.uit.ucpc.authservice.mapper.UserMapper;
import vn.edu.uit.ucpc.authservice.repository.AppUserRepository;
import vn.edu.uit.ucpc.authservice.repository.MemberRepository;
import vn.edu.uit.ucpc.authservice.repository.TeamRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AppUserService implements UserDetailsService {

    AppUserRepository appUserRepository;
    UserMapper userMapper;
    TeamRepository teamRepository;
    MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        AppUser appUser = appUserRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));

        return org.springframework.security.core.userdetails.User.builder()
                .username(appUser.getEmail())
                .password(appUser.getPasswordHash())
                .roles(appUser.getRole().name())
                .build();
    }

    @Transactional
    public ResponseEntity<BaseResponse<UserData>> initialTeamInfoSubmission(String email, TeamInfoUpdateRequest request) {
        AppUser appUser = appUserRepository.findByEmail(email)
                .orElse(null);

        if (appUser == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    BaseResponse.<UserData>builder()
                            .message("User not found.")
                            .build()
            );
        }

        if (appUser.getStatus() != UserStatus.NOT_FILLED_TEAM_INFO) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(
                    BaseResponse.<UserData>builder()
                            .message("Team information already filled. Use PUT for updates.")
                            .build()
            );
        }

        // Create new Team entity
        Team team = Team.builder()
                .teamName(request.getTeamName())
                .instructorName(request.getInstructorName())
                .instructorEmail(request.getInstructorEmail())
                .instructorPhone(request.getInstructorPhone())
                .level(request.getLevel())
                .build();

        // Set the team lead
        team.setTeamLead(appUser);

        // Create and associate members
        List<vn.edu.uit.ucpc.authservice.entity.Member> members = request.getMembers().stream()
                .map(memberDto -> vn.edu.uit.ucpc.authservice.entity.Member.builder()
                        .fullName(memberDto.getFullName())
                        .email(memberDto.getEmail())
                        .phone(memberDto.getPhone())
                        .birth(memberDto.getBirth())
                        .university(memberDto.getUniversity())
                        .studentId(memberDto.getStudentId())
                        .CCCD(memberDto.getCCCD())
                        .team(team)
                        .build())
                .collect(Collectors.toList());

        team.setMembers(members);

        // Save team and members (cascade will handle members)
        Team savedTeam = teamRepository.save(team);

        // Update AppUser with the new team
        appUser.setTeam(savedTeam);
        appUser.setStatus(UserStatus.TEAM_INFO_FILLED);
        appUserRepository.save(appUser);

        return ResponseEntity.status(HttpStatus.CREATED).body(
                BaseResponse.<UserData>builder()
                        .message("Team information submitted successfully.")
                        .data(userMapper.toUserData(appUser))
                        .build()
        );
    }

    @Transactional
    public ResponseEntity<BaseResponse<UserData>> updateTeamInfo(String email, TeamInfoUpdateRequest request) {
        AppUser appUser = appUserRepository.findByEmail(email)
                .orElse(null);

        if (appUser == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    BaseResponse.<UserData>builder()
                            .message("User not found.")
                            .build()
            );
        }

        if (appUser.getStatus() == UserStatus.NOT_FILLED_TEAM_INFO) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(
                    BaseResponse.<UserData>builder()
                            .message("Team information not yet filled. Use POST for initial submission.")
                            .build()
            );
        }

        // Retrieve existing team
        Team existingTeam = appUser.getTeam();
        if (existingTeam == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    BaseResponse.<UserData>builder()
                            .message("Team not found for this user.")
                            .build()
            );
        }

        // Update team details
        existingTeam.setTeamName(request.getTeamName());
        existingTeam.setInstructorName(request.getInstructorName());
        existingTeam.setInstructorEmail(request.getInstructorEmail());
        existingTeam.setInstructorPhone(request.getInstructorPhone());
        existingTeam.setLevel(request.getLevel());

        // Update members: remove old and add new
        existingTeam.getMembers().clear();
        List<vn.edu.uit.ucpc.authservice.entity.Member> newMembers = request.getMembers().stream()
                .map(memberDto -> vn.edu.uit.ucpc.authservice.entity.Member.builder()
                        .fullName(memberDto.getFullName())
                        .email(memberDto.getEmail())
                        .phone(memberDto.getPhone())
                        .birth(memberDto.getBirth())
                        .university(memberDto.getUniversity())
                        .studentId(memberDto.getStudentId())
                        .CCCD(memberDto.getCCCD())
                        .team(existingTeam)
                        .build())
                .collect(Collectors.toList());
        existingTeam.setMembers(newMembers);

        teamRepository.save(existingTeam);
        appUserRepository.save(appUser);

        return ResponseEntity.status(HttpStatus.OK).body(
                BaseResponse.<UserData>builder()
                        .message("Team information updated successfully.")
                        .data(userMapper.toUserData(appUser))
                        .build()
        );
    }

    public ResponseEntity<BaseResponse<UserData>> getTeamInfo(String email) {
        AppUser appUser = appUserRepository.findByEmail(email)
                .orElse(null);

        if (appUser == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    BaseResponse.<UserData>builder()
                            .message("User not found.")
                            .build()
            );
        }

        return ResponseEntity.status(HttpStatus.OK).body(
                BaseResponse.<UserData>builder()
                        .message("Team information retrieved successfully.")
                        .data(userMapper.toUserData(appUser))
                        .build()
        );
    }

    @Transactional
    public void updateUserPaymentStatus(String userId) {
        AppUser appUser = appUserRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        appUser.setPaymentStatus(true);
        appUserRepository.save(appUser);
    }
}
