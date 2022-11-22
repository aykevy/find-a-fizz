package com.techelevator.jpa.controller.reviews;

import com.techelevator.jpa.entity.reviews.BeerReview;
import com.techelevator.jpa.service.reviews.BeerReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
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

    /*
        POST example via Postman adding a new beer review: http://localhost:8080/beerReview
        Raw body example (Make sure to put in all fields except ID in the JSON body you are sending)
            {
                "userId": 3,
                "beerId": 1,
                "review": "This is very good.",
                "rating": 5,
                "createdAt": "2022-11-15"
            }
     */
    @PostMapping("/beerReview")
    public void addBeerReview(@RequestBody BeerReview beerReview)
    {
        beerReviewService.addBeerReview(beerReview);
    }

    /* DELETE example on Postman (Remember ID is the entry id on the table): http://localhost:8080/beerReview/43 */
    @DeleteMapping("/beerReview/{id}")
    public void deleteBeerReviewById(@PathVariable Long id)
    {
        beerReviewService.deleteBeerReviewById(id);
    }
}