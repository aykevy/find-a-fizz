package com.techelevator.jpa.entity.repository;

import com.techelevator.jpa.entity.BreweryReview;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BreweryReviewRepository extends JpaRepository<BreweryReview, Long> {
    List<BreweryReview> findByUserId(Long userId);
    List<BreweryReview> findByBreweryId(Long breweryId);
}