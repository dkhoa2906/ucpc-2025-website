package vn.edu.uit.ucpc.authservice.service;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import vn.edu.uit.ucpc.authservice.dto.request.EmailVerifyRequest;
import vn.edu.uit.ucpc.authservice.dto.request.PinCodeVerifyRequest;
import vn.edu.uit.ucpc.authservice.dto.request.RegistrationRequest;
import vn.edu.uit.ucpc.authservice.dto.response.BaseResponse;
import vn.edu.uit.ucpc.authservice.dto.response.EmailPinCodeData;
import vn.edu.uit.ucpc.authservice.dto.response.UserData;
import vn.edu.uit.ucpc.authservice.entity.AppUser;
import vn.edu.uit.ucpc.authservice.entity.UnverifiedUser;
import vn.edu.uit.ucpc.authservice.enums.Role;
import vn.edu.uit.ucpc.authservice.enums.UserStatus;
import vn.edu.uit.ucpc.authservice.mapper.UserMapper;
import vn.edu.uit.ucpc.authservice.repository.AppUserRepository;
import vn.edu.uit.ucpc.authservice.repository.UnverifiedUserRepository;
import vn.edu.uit.ucpc.authservice.util.EmailPinCodeUtil;
import vn.edu.uit.ucpc.authservice.util.PasswordUtil;
import vn.edu.uit.ucpc.authservice.service.EmailService;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class RegistrationService {

    AppUserRepository appUserRepository;
    UnverifiedUserRepository unverifiedUserRepository;
    UserMapper userMapper;
    PasswordUtil passwordUtil;
    EmailPinCodeUtil emailPinCodeUtil;
    EmailService emailService;

    public ResponseEntity<BaseResponse<Void>> emailVerify(EmailVerifyRequest request) {
        if (appUserRepository.existsByEmail(request.getEmail())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(
                    BaseResponse.<Void>builder()
                            .message("This email is already registered. Please try another email.")
                            .build()
            );
        }

        String pinCode = emailPinCodeUtil.generatePinCode(request.getEmail());

        emailService.sendEmail(request.getEmail(), "UCPC Email Verification", "Your PIN code is: " + pinCode);

        return ResponseEntity.status(HttpStatus.OK).body(
                BaseResponse.<Void>builder()
                        .message("The PIN code has been sent to your email")
                        .build()
        );
    }

    public ResponseEntity<BaseResponse<EmailPinCodeData>> pinCodeVerify(PinCodeVerifyRequest request) {
        boolean isPinValid = emailPinCodeUtil.validatePinCode(request.getEmail(), request.getPinCode(), false);
        if (!isPinValid) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(
                    BaseResponse.<EmailPinCodeData>builder()
                            .message("Invalid or Expired PIN Code. Please verify your email again.")
                            .build()
            );
        }

        return ResponseEntity.status(HttpStatus.OK).body(
                BaseResponse.<EmailPinCodeData>builder()
                        .message("PIN code checked successfully")
                        .data(EmailPinCodeData.builder()
                                .email(request.getEmail())
                                .pinCode(request.getPinCode())
                                .build())
                        .build()
            );
    }

    public ResponseEntity<BaseResponse<UserData>> registerUser(RegistrationRequest request) {
        boolean isPinValid = emailPinCodeUtil.validatePinCode(request.getEmail(), request.getPinCode(), true);
        if (!isPinValid) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(
                    BaseResponse.<UserData>builder()
                            .message("Invalid or Expired PIN Code. Please verify your email again.")
                            .build()
            );
        }

        if (appUserRepository.existsByEmail(request.getEmail())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(
                    BaseResponse.<UserData>builder()
                            .message("This email is already registered. Please try another email.")
                            .build()
            );
        }

        AppUser appUser = AppUser.builder()
                .email(request.getEmail())
                .fullName(request.getFullName())
                .passwordHash(passwordUtil.hashPassword(request.getPassword()))
                .role(Role.CANDIDATE)
                .status(UserStatus.NOT_FILLED_TEAM_INFO)
                .createdAt(LocalDate.now())
                .build();

        appUserRepository.save(appUser);

        return ResponseEntity.status(HttpStatus.CREATED).body(
                BaseResponse.<UserData>builder()
                        .message("Account created successfully")
                        .data(userMapper.toUserData(appUser))
                        .build()
        );
    }
}