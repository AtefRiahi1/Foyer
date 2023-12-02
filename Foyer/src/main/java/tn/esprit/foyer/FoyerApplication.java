package tn.esprit.foyer;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import tn.esprit.foyer.Entities.Admin;
import tn.esprit.foyer.Entities.Role;
import tn.esprit.foyer.Entities.User;
import tn.esprit.foyer.Repositories.IAdminRepository;
import tn.esprit.foyer.Repositories.IUserRepository;

@SpringBootApplication
@RequiredArgsConstructor
@EnableScheduling
public class FoyerApplication {
    private final IUserRepository userRepository;
    private final IAdminRepository adminRepository;

    public static void main(String[] args) {
        SpringApplication.run(FoyerApplication.class, args);
    }


    @Bean
    ApplicationRunner init () {
        return (args) -> {
        User adminAccount = userRepository.findByRole(Role.ADMIN);
        if (adminAccount == null) {
            Admin admin = new Admin();
            admin.setEmail("admin@gmail.com");
            admin.setNom("admin");
            admin.setPrenom("admin");
            admin.setRole(Role.ADMIN);
            admin.setImage("ffffffff");
            admin.setPassword(new BCryptPasswordEncoder().encode("admin"));
            adminRepository.save(admin);


};};
}}
