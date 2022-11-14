package com.techelevator.jpa.repository;

import com.techelevator.jpa.entity.BeerReview;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BeerReviewRepository extends JpaRepository<BeerReview, Long> {
    List<BeerReview> findByUserId(Long userId);
    List<BeerReview> findByBeerId(Long beerId);
}