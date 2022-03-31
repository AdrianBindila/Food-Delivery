package com.assignment2.service;

import com.assignment2.dtos.AdminMapper;
import com.assignment2.dtos.CustomerMapper;
import com.assignment2.dtos.UserDTO;
import com.assignment2.dtos.UserMapper;
import com.assignment2.model.Admin;
import com.assignment2.model.Customer;
import com.assignment2.model.User;
import com.assignment2.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public UserDTO getUser(String username, String password) {
        User user = userRepository.findByUsernameAndPassword(username, password).orElse(new User());
        if (user instanceof Admin admin) {
            return AdminMapper.getInstance().convertToDTO(admin);
        } else if (user instanceof Customer customer) {
            return CustomerMapper.getInstance().convertToDTO(customer);
        }
        return UserMapper.getInstance().convertToDTO(user);
    }
}
