package com.techelevator;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity(name = "Brewery")
public class Brewery {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    Long id;

    @Column(name = "name", columnDefinition = "TEXT")
    String name;

    @Column(name = "brewery_type", columnDefinition = "TEXT")
    String breweryType;

    @Column(name = "street", columnDefinition = "TEXT")
    String street;

    @Column(name = "city", columnDefinition = "TEXT")
    String city;

    @Column(name = "state", columnDefinition = "TEXT")
    String state;

    @Column(name = "postal_code", columnDefinition = "TEXT")
    String postalCode;

    @Column(name = "website_url", columnDefinition = "TEXT")
    String websiteUrl;

    @Column(name = "phone", columnDefinition = "TEXT")
    String phone;

    @Column(name = "created_at", nullable = false)
    LocalDate createdAt;

    @Column(name= "updated_at", nullable = false)
    LocalDate updatedAt;

    @Column(name = "country", columnDefinition = "TEXT")
    String country;

    @Column(name = "longitude")
    BigDecimal longitude;

    @Column(name = "latitude")
    BigDecimal latitude;

    @Column(name = "address_2", columnDefinition = "TEXT")
    String address2;

    @Column(name = "address_3", columnDefinition = "TEXT")
    String address3;

    @Column(name = "county_province", columnDefinition = "TEXT")
    String countyProvince;

    @Column(name = "obdb_id", columnDefinition = "TEXT")
    String obdbId;

    @Column(name = "tags", columnDefinition = "TEXT")
    String text;

    public Brewery(){}

    public Brewery(String name, String breweryType, String street, String city, String state, String postalCode, String websiteUrl, String phone, LocalDate createdAt, LocalDate updatedAt, String country, BigDecimal longitude, BigDecimal latitude, String address2, String address3, String countyProvince, String obdbId, String text) {
        this.name = name;
        this.breweryType = breweryType;
        this.street = street;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
        this.websiteUrl = websiteUrl;
        this.phone = phone;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.country = country;
        this.longitude = longitude;
        this.latitude = latitude;
        this.address2 = address2;
        this.address3 = address3;
        this.countyProvince = countyProvince;
        this.obdbId = obdbId;
        this.text = text;
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

    public String getBreweryType() {
        return breweryType;
    }

    public void setBreweryType(String breweryType) {
        this.breweryType = breweryType;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getWebsiteUrl() {
        return websiteUrl;
    }

    public void setWebsiteUrl(String websiteUrl) {
        this.websiteUrl = websiteUrl;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDate getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDate updatedAt) {
        this.updatedAt = updatedAt;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public BigDecimal getLongitude() {
        return longitude;
    }

    public void setLongitude(BigDecimal longitude) {
        this.longitude = longitude;
    }

    public BigDecimal getLatitude() {
        return latitude;
    }

    public void setLatitude(BigDecimal latitude) {
        this.latitude = latitude;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getAddress3() {
        return address3;
    }

    public void setAddress3(String address3) {
        this.address3 = address3;
    }

    public String getCountyProvince() {
        return countyProvince;
    }

    public void setCountyProvince(String countyProvince) {
        this.countyProvince = countyProvince;
    }

    public String getObdbId() {
        return obdbId;
    }

    public void setObdbId(String obdbId) {
        this.obdbId = obdbId;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}