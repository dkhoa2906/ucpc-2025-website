package vn.edu.uit.ucpc.authservice.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.edu.uit.ucpc.authservice.dto.webhook.WebhookDto;
import vn.edu.uit.ucpc.authservice.service.AppUserService;
import vn.edu.uit.ucpc.authservice.service.TeamService;

@RestController
@RequestMapping("/webhook")
@RequiredArgsConstructor
public class WebhookController {

    private final TeamService teamService;
    private final AppUserService appUserService;

    @PostMapping("/payment")
    public ResponseEntity<?> handlePaymentWebhook(@RequestBody WebhookDto webhookDto, @RequestHeader("Authorization") String apiKey) {
        String userId = webhookDto.getContent();
        appUserService.updateUserPaymentStatus(userId);
        return ResponseEntity.ok().build();
    }
}
