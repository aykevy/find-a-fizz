package com.techelevator.jpa.service;

import com.techelevator.jpa.repository.BreweryReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BreweryReviewService {

    private BreweryReviewRepository breweryReviewRepository;

    @Autowired
    public BreweryReviewService(BreweryReviewRepository breweryReviewRepository) {
        this.breweryReviewRepository = breweryReviewRepository;
    }
}