package com.techelevator.jpa.entity.reviews;

import javax.persistence.*;
import java.time.LocalDate;

@Entity(name = "BeerReview")
public class BeerReview {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    Long id;

    @Column(name = "user_id")
    Long userId;

    @Column(name = "beer_id")
    Long beerId;

    @Column(name = "review", columnDefinition = "TEXT")
    String review;

    @Column(name = "rating")
    Integer rating;

    @Column(name = "created_at", nullable = false)
    LocalDate createdAt;

    public BeerReview() {}

    public BeerReview(Long id, Long userId, Long beerId, String review, Integer rating, LocalDate createdAt) {
        this.id = id;
        this.userId = userId;
        this.beerId = beerId;
        this.review = review;
        this.rating = rating;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getBeerId() {
        return beerId;
    }

    public void setBeerId(Long beerId) {
        this.beerId = beerId;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
    }
}