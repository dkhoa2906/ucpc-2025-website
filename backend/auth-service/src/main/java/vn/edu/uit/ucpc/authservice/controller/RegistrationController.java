package vn.edu.uit.ucpc.authservice.controller;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.edu.uit.ucpc.authservice.dto.request.EmailVerifyRequest;
import vn.edu.uit.ucpc.authservice.dto.request.PinCodeVerifyRequest;
import vn.edu.uit.ucpc.authservice.dto.request.RegistrationRequest;
import vn.edu.uit.ucpc.authservice.dto.response.BaseResponse;
import vn.edu.uit.ucpc.authservice.dto.response.EmailPinCodeData;
import vn.edu.uit.ucpc.authservice.dto.response.UserData;
import vn.edu.uit.ucpc.authservice.service.RegistrationService;

@RequestMapping("/register")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RestController
public class RegistrationController {
    RegistrationService registrationService;

    @PostMapping("/email-verify")
    public ResponseEntity<BaseResponse<Void>> emailVerify(@RequestBody EmailVerifyRequest request) {
        return registrationService.emailVerify(request);
    }

    @PostMapping("/pin-verify")
    public ResponseEntity<BaseResponse<EmailPinCodeData>> pinCodeVerify(@RequestBody PinCodeVerifyRequest request) {
        return registrationService.pinCodeVerify(request);
    }

    @PostMapping("/register-user")
    public ResponseEntity<BaseResponse<UserData>> registerUser(@RequestBody RegistrationRequest request) {
        return registrationService.registerUser(request);
    }
}
