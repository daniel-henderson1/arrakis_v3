package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.User;
import com.db.grad.javaapi.service.UserHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private UserHandler userHandler;
    @Autowired
    public UserController(UserHandler uT){
        userHandler = uT;
    }
    @GetMapping("/users/id/{id}")
    public User getTradeById(@PathVariable(value = "id") long id){
        return userHandler.getUserByID(id);
    }
    @GetMapping("/users/username/{username}")
    public User getTradeBySecurityID(@PathVariable(value = "username") String username){
        return userHandler.getUserByUsername(username);
    }
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userHandler.getAllUsers();
    }

    @GetMapping("/users/auth/{username}/{password}")
    public boolean auth(@PathVariable(value = "username") String username,
                        @PathVariable(value = "password") String password){
        return userHandler.auth(username,password);
    }
    @PostMapping("/users/register/{username}/{password}/{firstname}/{lastname}")
    public boolean register(@PathVariable(value = "username") String username,
                            @PathVariable(value = "password") String password,
                            @PathVariable(value = "firstname") String firstname,
                            @PathVariable(value = "lastname") String lastname) {
        return userHandler.register(username, password, firstname, lastname);
    }
}