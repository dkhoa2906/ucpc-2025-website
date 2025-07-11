package vn.edu.uit.ucpc.authservice.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "auth_email_pin")
public class PinCode {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "pin_id", nullable = false, updatable = false)
    String id;

    @Column(name = "email", nullable = false, length = 100)
    String email;

    @Column(name = "pin_code", nullable = false, length = 6)
    String pinCode;

    @Column(name = "created_at", nullable = false)
    LocalDateTime createdAt;

    @Column(name = "expires_at", nullable = false)
    LocalDateTime expiresAt;

    @Column(name = "used", nullable = false)
    boolean used;

}
