package com.techelevator;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface BreweryRepository extends JpaRepository<Brewery, Long>
{
    List<Brewery> findByCity(String city);
    List<Brewery> findByState(String state);
    List<Brewery> findByPostalCode(String postalCode);

    /* Note when doing an update here, use the Brewery class variable names, not the table names in Postgres. */
    @Query("UPDATE Brewery SET name=:name, breweryType=:breweryType, street=:street, city=:city, state=:state, postalCode=:postalCode, websiteUrl=:websiteUrl, phone=:phone WHERE id=:id")
    @Modifying
    @Transactional
    int updateBreweryById(String name, String breweryType, String street, String city, String state,
                            String postalCode, String websiteUrl, String phone, Long id);
}