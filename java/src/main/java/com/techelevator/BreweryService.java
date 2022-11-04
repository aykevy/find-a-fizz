package com.techelevator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class BreweryService {

    private BreweryRepository breweryRepository;

    @Autowired
    public BreweryService(BreweryRepository breweryRepository) {
        this.breweryRepository = breweryRepository;
    }

    public List<Brewery> getAllBreweries() {
        return breweryRepository.findAll();
    }

    public List<Brewery> getAllBreweriesByCity(String city) {
        return breweryRepository.findByCity(city);
    }

    public List<Brewery> getAllBreweriesByState(String state) {
        return breweryRepository.findByState(state);
    }

    public List<Brewery> getAllBreweriesByPostalCode(String postalCode) {
        return breweryRepository.findByPostalCode(postalCode);
    }


    public Optional<Brewery> getBreweryById(Long id)
    {
        return breweryRepository.findById(id);
    }

}