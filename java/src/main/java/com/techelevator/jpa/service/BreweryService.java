package com.techelevator.jpa.service;

import com.techelevator.jpa.entity.Brewery;
import com.techelevator.jpa.repository.BreweryRepository;
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

    public Optional<Brewery> getBreweryById(Long id)
    {
        return breweryRepository.findById(id);
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

    public List<Brewery> getAllBreweriesByPostalCode(String postalCode)
    {
        return breweryRepository.findByPostalCode(postalCode);
    }

    public void addBrewery(Brewery brewery)
    {
        breweryRepository.save(brewery);
    }

    public void deleteBreweryById(Long id)
    {
        breweryRepository.deleteById(id);
    }

    public void updateBrewery(Brewery brewery, Long id)
    {
        breweryRepository.updateBrewery(brewery.getName(), brewery.getBreweryType(), brewery.getStreet(),
                brewery.getCity(), brewery.getState(), brewery.getPostalCode(), brewery.getWebsiteUrl(),
                brewery.getPhone(), brewery.getCreatedAt(), brewery.getUpdatedAt(), brewery.getCountry(),
                brewery.getLongitude(), brewery.getLatitude(), brewery.getAddress2(), brewery.getAddress3(),
                brewery.getCountyProvince(), brewery.getObdbId(), brewery.getTags(), id);
    }
}