package com.example.moeenms.model.Service;


import com.example.moeenms.model.Entities.User;
import com.example.moeenms.model.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUser(Integer userId) {
        return userRepository.findById(userId);
    }

    public void addNewUser(User user) {
        userRepository.save(user);

    }
    public void deleteUser(Integer userId) {
        userRepository.deleteById(userId);
    }
}

