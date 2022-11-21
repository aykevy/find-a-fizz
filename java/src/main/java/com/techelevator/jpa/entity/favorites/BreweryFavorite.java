package com.techelevator.jpa.entity.favorites;

import javax.persistence.*;

@Entity(name = "BreweryFavorite")
public class BreweryFavorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    Long id;

    @Column(name = "user_id")
    Long userId;

    @Column(name = "brewery_id")
    Long beerId;

    public BreweryFavorite() {}

    public BreweryFavorite(Long id, Long userId, Long beerId) {
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