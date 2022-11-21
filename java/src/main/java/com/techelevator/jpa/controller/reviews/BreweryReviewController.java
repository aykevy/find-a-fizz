package com.techelevator.jpa.controller.reviews;

import com.techelevator.jpa.entity.reviews.BreweryReview;
import com.techelevator.jpa.service.reviews.BreweryReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
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

    /*
        POST example via Postman adding a new brewery review: http://localhost:8080/breweryReview
        Raw body example (Make sure to put in all fields except ID in the JSON body you are sending)
            {
                "userId": 3,
                "breweryId": 1,
                "review": "Was a little busy at this place.",
                "rating": 3,
                "createdAt": "2022-11-15"
            }
     */
    @PostMapping("/breweryReview")
    public void addBreweryReview(@RequestBody BreweryReview breweryReview)
    {
        breweryReviewService.addBreweryReview(breweryReview);
    }

    /* DELETE example on Postman (Remember ID is the entry id on the table): http://localhost:8080/breweryReview/43 */
    @DeleteMapping("/breweryReview/{id}")
    public void deleteBreweryReviewById(@PathVariable Long id)
    {
        breweryReviewService.deleteBreweryReviewById(id);
    }
}