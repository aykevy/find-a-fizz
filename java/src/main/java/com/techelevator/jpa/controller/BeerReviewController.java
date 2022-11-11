package com.techelevator.jpa.controller;

import com.techelevator.jpa.service.BeerReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class BeerReviewController {

    @Autowired
    private BeerReviewService beerReviewService;

}
