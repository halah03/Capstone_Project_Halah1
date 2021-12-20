package com.example.moeenms.model.Configuration;

import com.example.moeenms.model.Entities.User;
import com.example.moeenms.model.Repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.util.List;

@Configuration
public class UserConfig {
    @Bean
    CommandLineRunner commandLineRunner(UserRepository repository){
        return args ->{
            User user1= new User(
                    4,
                          "halah03",
                    333,
                    "halah",
                    "albalawi",
                    "al@gmail.com"

            );

            repository.saveAll(List.of(user1 ));
        };
    }
}
