package vn.edu.uit.ucpc.authservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.edu.uit.ucpc.authservice.entity.PinCode;

@Repository
public interface EmailPinCodeRepository extends JpaRepository<PinCode, Integer> {
    PinCode findByEmailAndPinCode(String email, String pinCode);
}
