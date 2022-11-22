package com.techelevator.jpa.entity.user_relations;

import javax.persistence.*;

@Entity(name = "Ownership")
public class Ownership {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    Long id;

    @Column(name = "user_id")
    Long userId;

    @Column(name = "brewery_id")
    Long breweryId;

    public Ownership() {}

    public Ownership(Long id, Long userId, Long breweryId) {
        this.id = id;
        this.userId = userId;
        this.breweryId = breweryId;
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

    public Long getBreweryId() {
        return breweryId;
    }

    public void setBreweryId(Long breweryId) {
        this.breweryId = breweryId;
    }
}