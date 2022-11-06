package com.techelevator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class BeerController {

    @Autowired
    private BeerService beerService;

    /* Example when entering in link: http://localhost:8080/beer/1 */
    @GetMapping("/beer/{id}")
    public Optional<Beer> getBeerById(@PathVariable Long id)
    {
        return beerService.getBeerById(id);
    }

    /* Example when entering in link: http://localhost:8080/beers */
    @GetMapping("/beers")
    public List<Beer> getAllBeers() {
        return beerService.getAllBeers();
    }


    @PostMapping("/beer")
    public void addBeer(@RequestBody Beer beer)
    {
        System.out.println("Added beer!");
        beerService.addBeer(beer);
    }

    @DeleteMapping("/beer/{id}")
    public void deleteBreweryById(@PathVariable Long id)
    {
        beerService.deleteBeerById(id);
    }
}
