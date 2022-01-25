package com.example.moeenms.controller;



import com.example.moeenms.model.Entities.User;
import com.example.moeenms.model.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/moeen")
public class UserController {


    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getUsers() {
        return userService.getUsers();
    }


    @GetMapping(path = "{userId}")
    public Optional<User> getUser(@PathVariable (name = "userId") Integer userId) {
        return userService.getUser(userId);
    }


    @GetMapping(path = "login")
    public String checkLogin(@RequestParam (name = "email") String email ,
                             @RequestParam (name = "password") String password ) {
        return userService.getCheck(email,password);

    }
    @PostMapping(path= "add")
    public void registerNewUser(@RequestBody User user){
        userService.addNewUser(user);
    }
    @DeleteMapping(path = "delete/{userId}")
    public void deleteUser(@PathVariable ("userId") Integer userId){
        userService.deleteUser(userId);
    }


}

