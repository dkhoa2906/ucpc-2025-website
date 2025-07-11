package vn.edu.uit.ucpc.authservice.repository;


import jakarta.validation.constraints.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.edu.uit.ucpc.authservice.entity.UnverifiedUser;

import java.util.Optional;


@Repository
public interface UnverifiedUserRepository extends JpaRepository<UnverifiedUser, String> {
    Optional<UnverifiedUser> findByEmail(String email);
}
