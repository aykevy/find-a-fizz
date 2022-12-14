package com.techelevator.jdbc.dao;

import com.techelevator.jdbc.model.User;
import java.util.List;

public interface UserDao {

    List<User> findAll();
    User getUserById(Long userId);
    User findByUsername(String username);
    int findIdByUsername(String username);
    boolean create(String username, String password, String role);

}