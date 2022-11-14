package com.techelevator.jpa.entity;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity(name = "Beer")
public class Beer {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    Long id;

    @Column(name = "name", columnDefinition = "TEXT")
    String name;

    @Column(name = "description", columnDefinition = "TEXT")
    String description;

    @Column(name = "image_url", columnDefinition = "TEXT")
    String imageUrl;

    @Column(name = "abv_percent")
    BigDecimal abvPercent;

    @Column(name = "type")
    String type;

    public Beer() {}

    public Beer(Long id, String name, String description, String imageUrl, BigDecimal abvPercent, String type) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.abvPercent = abvPercent;
        this.type = type;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public BigDecimal getAbvPercent() {
        return abvPercent;
    }

    public void setAbvPercent(BigDecimal abvPercent) {
        this.abvPercent = abvPercent;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}