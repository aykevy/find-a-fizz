package com.techelevator.jpa.controller;

import com.techelevator.jpa.entity.BeerReview;
import com.techelevator.jpa.service.BeerReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@CrossOrigin
@RestController
public class BeerReviewController {

    @Autowired
    private BeerReviewService beerReviewService;

    /* GET example: http://localhost:8080/beerReviews */
    @GetMapping("/beerReviews")
    public List<BeerReview> getAllBeerReviews() {
        return beerReviewService.getAllBeerReviews();
    }

    /* GET example: http://localhost:8080/beerReviews/userId?userId=1 */
    @GetMapping("/beerReviews/userId")
    public List<BeerReview> getAllBeerReviewsByUserId(@RequestParam Long userId)
    {
        return beerReviewService.getAllBeerReviewsByUserId(userId);
    }

    /* GET example: http://localhost:8080/beerReviews/beerId?beerId=1 */
    @GetMapping("/beerReviews/beerId")
    public List<BeerReview> getAllBeerReviewsByBeerId(@RequestParam Long beerId)
    {
        return beerReviewService.getAllBeerReviewsByBeerId(beerId);
    }
}