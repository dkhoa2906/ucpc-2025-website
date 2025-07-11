package vn.edu.uit.ucpc.authservice.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vn.edu.uit.ucpc.authservice.entity.Team;
import vn.edu.uit.ucpc.authservice.repository.TeamRepository;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class TeamServiceImpl implements TeamService {

    private final TeamRepository teamRepository;

    @Override
    public Team markAsPaid(String teamName) {
        Team team = teamRepository.findByTeamName(teamName)
                .orElseThrow(() -> new RuntimeException("Team not found"));
        team.setPaid(true);
        team.setPaymentTime(LocalDateTime.now());
        return teamRepository.save(team);
    }
}
