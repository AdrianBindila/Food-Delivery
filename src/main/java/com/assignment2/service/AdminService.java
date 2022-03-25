package com.assignment2.service;

import com.assignment2.model.Admin;
import com.assignment2.model.Restaurant;
import com.assignment2.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    @Autowired
    AdminRepository adminRepository;

    public Admin findAdmin(String username, String password) {
        return adminRepository.findByUsernameAndPassword(username, password).orElse(new Admin());
    }

    public void addRestaurant(Long adminId, Restaurant restaurant) {
        Admin admin = adminRepository.getById(adminId);
        admin.setRestaurant(restaurant);
        adminRepository.save(admin);
    }
}