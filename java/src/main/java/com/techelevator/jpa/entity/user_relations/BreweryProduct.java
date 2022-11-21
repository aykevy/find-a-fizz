package com.techelevator.jpa.entity.user_relations;

import javax.persistence.*;

@Entity(name = "BreweryProduct")
public class BreweryProduct {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    Long id;

    @Column(name = "brewery_id")
    Long breweryId;

    @Column(name = "beer_id")
    Long beerId;

    public BreweryProduct() {};

    public BreweryProduct(Long id, Long breweryId, Long beerId) {
        this.id = id;
        this.breweryId = breweryId;
        this.beerId = beerId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getBreweryId() {
        return breweryId;
    }

    public void setBreweryId(Long breweryId) {
        this.breweryId = breweryId;
    }

    public Long getBeerId() {
        return beerId;
    }

    public void setBeerId(Long beerId) {
        this.beerId = beerId;
    }
}