package vn.edu.uit.ucpc.authservice.service;

public interface EmailService {
    void sendEmail(String to, String subject, String body);
}
