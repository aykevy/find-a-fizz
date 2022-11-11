package com.techelevator.jpa.service;

import com.techelevator.jpa.repository.BeerReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BeerReviewService {

    private BeerReviewRepository beerReviewRepository;

    @Autowired
    public BeerReviewService(BeerReviewRepository beerReviewRepository) {
        this.beerReviewRepository = beerReviewRepository;
    }


}
