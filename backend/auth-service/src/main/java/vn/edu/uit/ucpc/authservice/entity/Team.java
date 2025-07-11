package vn.edu.uit.ucpc.authservice.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "team")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name = "team_name", nullable = false, unique = true)
    String teamName;

    @Column(name = "instructor_name", nullable = false)
    String instructorName;

    @Column(name = "instructor_email", nullable = false)
    String instructorEmail;

    @Column(name = "instructor_phone", nullable = false)
    String instructorPhone;

    @Column(name = "level", nullable = false)
    String level; // "highschool" or "university"

    @Column(name = "paid", nullable = false)
    @Builder.Default
    boolean paid = false;

    @Column(name = "payment_time")
    LocalDateTime paymentTime;

    @OneToOne(mappedBy = "team", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    AppUser teamLead; // The AppUser who registered the team

    @OneToMany(mappedBy = "team", cascade = CascadeType.ALL, orphanRemoval = true)
    List<Member> members;
}
