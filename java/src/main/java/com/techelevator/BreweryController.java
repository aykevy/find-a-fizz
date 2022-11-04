package com.techelevator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class BreweryController {

    @Autowired
    private BreweryService breweryService;

    @GetMapping("/breweries")
    public List<Brewery> getAllBreweries() {
        return breweryService.getAllBreweries();
    }

    /*
        Example when entering in link: http://localhost:8080/breweries/city?city=Dallas
     */
    @GetMapping("/breweries/city")
    public List<Brewery> getAllBreweriesByCity(@RequestParam String city)
    {
        return breweryService.getAllBreweriesByCity(city);
    }

    /*
        Example when entering in link: http://localhost:8080/breweries/state?state=Texas
     */
    @GetMapping("/breweries/state")
    public List<Brewery> getAllBreweriesByState(@RequestParam String state)
    {
        return breweryService.getAllBreweriesByState(state);
    }

    /*
        Example when entering in link: http://localhost:8080/breweries/postalCode?postalCode=13005
     */
    @GetMapping("/breweries/postalCode")
    public List<Brewery> getAllBreweriesByPostalCode(@RequestParam String postalCode)
    {
        return breweryService.getAllBreweriesByPostalCode(postalCode);
    }

    @GetMapping("/brewery/{id}")
    public Optional<Brewery> getBreweryById(@PathVariable Long id)
    {
        return breweryService.getBreweryById(id);
    }
}
