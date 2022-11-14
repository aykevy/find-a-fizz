package com.techelevator.jpa.controller;

import com.techelevator.jpa.entity.BreweryReview;
import com.techelevator.jpa.service.BreweryReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@CrossOrigin
@RestController
public class BreweryReviewController {

    @Autowired
    private BreweryReviewService breweryReviewService;

    /* GET example: http://localhost:8080/breweryReviews */
    @GetMapping("/breweryReviews")
    public List<BreweryReview> getAllBeerReviews() {
        return breweryReviewService.getAllBreweryReviews();
    }

    /* GET example: http://localhost:8080/breweryReviews/userId?userId=1 */
    @GetMapping("/breweryReviews/userId")
    public List<BreweryReview> getAllBeerReviewsByUserId(@RequestParam Long userId)
    {
        return breweryReviewService.getAllBreweryReviewsByUserId(userId);
    }

    /* GET example: http://localhost:8080/breweryReviews/breweryId?breweryId=1 */
    @GetMapping("/breweryReviews/breweryId")
    public List<BreweryReview> getAllBeerReviewsByBeerId(@RequestParam Long breweryId)
    {
        return breweryReviewService.getAllBreweryReviewsByBreweryId(breweryId);
    }
}