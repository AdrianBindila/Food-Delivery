package com.assignment2.service;

import com.assignment2.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RestaurantService {
    @Autowired
    RestaurantRepository restaurantRepository;
}
