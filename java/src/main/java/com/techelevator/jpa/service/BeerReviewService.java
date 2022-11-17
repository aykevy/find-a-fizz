package com.techelevator.jpa.service;

import com.techelevator.jpa.entity.BeerReview;
import com.techelevator.jpa.entity.repository.BeerReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BeerReviewService {

    private BeerReviewRepository beerReviewRepository;

    @Autowired
    public BeerReviewService(BeerReviewRepository beerReviewRepository) {
        this.beerReviewRepository = beerReviewRepository;
    }

    public List<BeerReview> getAllBeerReviews() {
        return beerReviewRepository.findAll();
    }

    public List<BeerReview> getAllBeerReviewsByUserId(Long userId) {
        return beerReviewRepository.findByUserId(userId);
    }

    public List<BeerReview> getAllBeerReviewsByBeerId(Long beerId) {
        return beerReviewRepository.findByBeerId(beerId);
    }
}