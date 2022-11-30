package com.techelevator.jpa.entity.repository;

import com.techelevator.jpa.entity.Brewery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface BreweryRepository extends JpaRepository<Brewery, Long>
{
    List<Brewery> findAll();
    List<Brewery> findByCity(String city);
    List<Brewery> findByState(String state);
    List<Brewery> findByPostalCode(String postalCode);

    /* Note when doing an update here, use the Brewery class variable names, not the table names in Postgres. */
    @Query("UPDATE Brewery SET name=:name, breweryType=:breweryType, street=:street, city=:city, state=:state, postalCode=:postalCode, websiteUrl=:websiteUrl, createdAt=:createdAt, updatedAt=:updatedAt, country=:country, longitude=:longitude, latitude=:latitude, address2=:address2, address3=:address3, phone=:phone, countyProvince=:countyProvince, obdbId=:obdbId, tags=:tags WHERE id=:id")
    @Modifying
    @Transactional
    int updateBrewery(String name, String breweryType, String street, String city, String state,
                          String postalCode, String websiteUrl, String phone, LocalDate createdAt, LocalDate updatedAt,
                          String country, BigDecimal longitude, BigDecimal latitude, String address2, String address3,
                          String countyProvince, String obdbId, String tags, Long id);

    @Query("DELETE FROM BreweryReview WHERE breweryId=:id")
    @Modifying
    @Transactional
    int deleteBreweryReviewCascade(@Param("id") Long id);

    @Query("DELETE FROM Ownership WHERE breweryId=:id")
    @Modifying
    @Transactional
    int deleteOwnershipCascade(@Param("id") Long id);

    @Query("DELETE FROM BreweryProduct WHERE breweryId=:id")
    @Modifying
    @Transactional
    int deleteBreweryProductCascade(@Param("id") Long id);

}