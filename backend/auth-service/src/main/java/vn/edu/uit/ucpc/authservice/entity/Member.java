package vn.edu.uit.ucpc.authservice.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "team_member") // Renamed to avoid conflict with DTO
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Assuming auto-incrementing ID
    Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team_id", nullable = false)
    Team team; // Link to the Team entity

    @Column(name = "full_name", nullable = false)
    String fullName;

    @Column(name = "email", nullable = false)
    String email;

    @Column(name = "phone", nullable = false)
    String phone;

    @Column(name = "date_of_birth", nullable = false)
    LocalDate birth;

    @Column(name = "university", nullable = false)
    String university;

    @Column(name = "student_id") // Can be null for high school students
    String studentId;

    @Column(name = "cccd", nullable = false)
    String CCCD;
}
