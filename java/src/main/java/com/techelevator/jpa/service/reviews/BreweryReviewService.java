package com.techelevator.jpa.service.reviews;

import com.techelevator.jpa.entity.reviews.BreweryReview;
import com.techelevator.jpa.repository.reviews.BreweryReviewRepository;
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

    public void addBreweryReview(BreweryReview breweryReview)
    {
        breweryReviewRepository.save(breweryReview);
    }

    public void deleteBreweryReviewById(Long id)
    {
        breweryReviewRepository.deleteById(id);
    }
}