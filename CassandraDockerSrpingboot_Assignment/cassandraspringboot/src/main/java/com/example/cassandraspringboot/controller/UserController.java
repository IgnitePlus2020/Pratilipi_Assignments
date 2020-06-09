package com.example.cassandraspringboot.controller;

import com.example.cassandraspringboot.model.User;
import com.example.cassandraspringboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    //-------------------------------------------------Create New User-------------------------------------------------
    @PostMapping("/user")
    public User createUser(@Valid @RequestBody User user) {

        return userService.createUser(user);
    }

    //-------------------------------------------------Get All Users---------------------------------------------------
    @GetMapping("/user")
    public List<User> getAllUsers() {

        return userService.getAllUsers();
    }

    //-----------------------------------------------Get User By ID ---------------------------------------------------
    @GetMapping(value = "/user/{id}")
    public User getUserById(@PathVariable("id") int id) {
        return userService.getUserById(id);
    }

    //-----------------------------------------------Update User By ID ------------------------------------------------
    @PutMapping(value = "/user/{id}")
    public User updateUserById(@PathVariable("id") int id, @RequestBody User user) {
        return userService.updateUserById(id, user);
    }

    //-------------------------------------------------Delete User By ID ----------------------------------------------
    @DeleteMapping(value = "/user/{id}")
    public String deleteUserById(@PathVariable("id") int id) {
        userService.deleteUserById(id);
        return "User with id " + id + " has been deleted!";
    }
}


  /*  @PostConstruct
    public void saveUser() {
        List<User> users = new CopyOnWriteArrayList<>();
        users.add(new User(4, "David", "Johnson", "david@johnson.com", "#G4, Brooklyn Heights, Bangalore", "543216"));
        users.add(new User(5, "Emma", "Jones", "emma@jones.com", "#204, Brooklyn Heights, Bangalore", "543216"));
        userDAO.saveAll(users);
    }*/

