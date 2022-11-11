package com.techelevator.jpa.repository;

import com.techelevator.jpa.entity.BeerReview;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BeerReviewRepository extends JpaRepository<BeerReview, Long> {}