package vn.edu.uit.ucpc.authservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.edu.uit.ucpc.authservice.entity.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
}
