package com.techelevator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class BreweryController {

    @Autowired
    private BreweryService breweryService;

    @GetMapping("/breweries")
    public List<Brewery> getAllBreweries() {
        return breweryService.getAllBreweries();
    }

    @GetMapping("/brewery/{id}")
    public Optional<Brewery> getBreweryById(@PathVariable Long id)
    {
        return breweryService.getBreweryById(id);
    }
}
