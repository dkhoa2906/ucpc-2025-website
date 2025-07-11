package vn.edu.uit.ucpc.authservice.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.edu.uit.ucpc.authservice.entity.AppUser;

import java.util.Optional;


@Repository
public interface AppUserRepository extends JpaRepository<AppUser, String> {

    boolean existsByEmail(String email);

    Optional<AppUser> findByEmail(String email);

}