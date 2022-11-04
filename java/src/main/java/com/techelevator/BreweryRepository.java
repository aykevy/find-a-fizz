package com.techelevator;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BreweryRepository extends JpaRepository<Brewery, Long>
{
    List<Brewery> findByCity(String city);
    List<Brewery> findByState(String State);
    List<Brewery> findByPostalCode(String postalCode);

}