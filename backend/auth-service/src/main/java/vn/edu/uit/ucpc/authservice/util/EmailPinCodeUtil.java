package vn.edu.uit.ucpc.authservice.util;

import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;
import vn.edu.uit.ucpc.authservice.entity.PinCode;
import vn.edu.uit.ucpc.authservice.repository.EmailPinCodeRepository;

import java.security.SecureRandom;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@Data
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class EmailPinCodeUtil {
    EmailPinCodeRepository emailPinCodeRepository;

    static int PIN_LENGTH = 6;
    static SecureRandom RANDOM = new SecureRandom();
    static int PIN_EXP_MIN = 10;

    public String generatePinCode(String email) {
        StringBuilder pinCode = new StringBuilder();
        for (int i = 0; i < PIN_LENGTH; i++) {
            pinCode.append(RANDOM.nextInt(10));
        }

        PinCode emailPinCode = PinCode.builder()
                .email(email)
                .pinCode(pinCode.toString())
                .createdAt(LocalDateTime.now())
                .expiresAt(LocalDateTime.now().plusMinutes(PIN_EXP_MIN))
                .used(false)
                .build();

        emailPinCodeRepository.save(emailPinCode);

        return emailPinCode.getPinCode();
    }

    public boolean validatePinCode(String email, String pinCode, boolean toDisable) {
        PinCode pinCodeRecord = emailPinCodeRepository.findByEmailAndPinCode(email, pinCode);

        if (pinCodeRecord == null) return false;

        if (pinCodeRecord.isUsed() || pinCodeRecord.getExpiresAt().isBefore(LocalDateTime.now())) {
            return false;
        }

        if (toDisable) pinCodeRecord.setUsed(true);


        emailPinCodeRepository.save(pinCodeRecord);

        return true;
    }


}
