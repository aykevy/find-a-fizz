package com.techelevator.jpa.service;

import com.techelevator.jpa.entity.BreweryReview;
import com.techelevator.jpa.entity.repository.BreweryReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BreweryReviewService {

    private BreweryReviewRepository breweryReviewRepository;

    @Autowired
    public BreweryReviewService(BreweryReviewRepository breweryReviewRepository) {
        this.breweryReviewRepository = breweryReviewRepository;
    }

    public List<BreweryReview> getAllBreweryReviews() {
        return breweryReviewRepository.findAll();
    }

    public List<BreweryReview> getAllBreweryReviewsByUserId(Long userId) {
        return breweryReviewRepository.findByUserId(userId);
    }

    public List<BreweryReview> getAllBreweryReviewsByBreweryId(Long breweryId) {
        return breweryReviewRepository.findByBreweryId(breweryId);
    }
}