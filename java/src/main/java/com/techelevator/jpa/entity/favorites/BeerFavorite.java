package com.techelevator.jpa.entity.favorites;

import javax.persistence.*;

@Entity(name = "BeerFavorite")
public class BeerFavorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    Long id;

    @Column(name = "user_id")
    Long userId;

    @Column(name = "beer_id")
    Long beerId;

    public BeerFavorite() {}

    public BeerFavorite(Long id, Long userId, Long beerId) {
        this.id = id;
        this.userId = userId;
        this.beerId = beerId;
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
}