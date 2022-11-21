package com.techelevator.jpa.repository.reviews;

import com.techelevator.jpa.entity.reviews.BeerReview;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BeerReviewRepository extends JpaRepository<BeerReview, Long> {
    List<BeerReview> findByUserId(Long userId);
    List<BeerReview> findByBeerId(Long beerId);
}