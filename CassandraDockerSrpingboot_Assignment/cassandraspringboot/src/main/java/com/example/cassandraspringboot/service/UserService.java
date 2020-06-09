package com.example.cassandraspringboot.service;

import com.example.cassandraspringboot.dao.UserDAO;
import com.example.cassandraspringboot.exceptions.UserNotFoundException;
import com.example.cassandraspringboot.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserDAO userDAO;

    //-------------------------------------------------Create New User-------------------------------------------------
    public User createUser(User user) {

        return userDAO.save(user);
    }

    //-------------------------------------------------Get All Users---------------------------------------------------
    public List<User> getAllUsers() {

        return userDAO.findAll();
    }

    //-----------------------------------------------Get User By ID ---------------------------------------------------
    public User getUserById(int id) {
        Optional<User> optionalUser = userDAO.findById(id);
        if (!optionalUser.isPresent())
            throw new UserNotFoundException("User Record with id " + id + " is not available");
        return userDAO.findById(id).get();
    }

    //-----------------------------------------------Update User By ID ------------------------------------------------
    public User updateUserById(int id, User user) {
        Optional<User> optionalUser = userDAO.findById(id);
        if (!optionalUser.isPresent())
            throw new UserNotFoundException("User Record with id " + id + " is not available");
        user.setId(id);
        return userDAO.save(user);
    }

    //-------------------------------------------------Delete User By ID ----------------------------------------------
    public void deleteUserById(int id) {
        Optional<User> optionalUser = userDAO.findById(id);
        if (!optionalUser.isPresent())
            throw new UserNotFoundException("User Record with id " + id + " is not available");
        userDAO.deleteById(id);
    }
}

