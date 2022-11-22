package com.techelevator.jpa.controller;

import com.techelevator.jpa.entity.Beer;
import com.techelevator.jpa.service.BeerService;
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

    /*
        POST example via Postman adding a new beer: http://localhost:8080/beer
        Raw body example (Make sure to put in all fields except ID in the JSON body you are sending)
            {
                "name": "Modelo",
                "description": "Made with Love",
                "imageUrl": "https://w7.pngwing.com/pngs/232/1011/png-transparent-grupo-modelo-beer-corona-pilsner-lager-beer-food-text-label.png",
                "abvPercent": 5,
                "type": "Lager"
            }
     */
    @PostMapping("/beer")
    public void addBeer(@RequestBody Beer beer)
    {
        beerService.addBeer(beer);
    }

    /* DELETE example on Postman: http://localhost:8080/beer/1 */
    @DeleteMapping("/beer/{id}")
    public void deleteBeerById(@PathVariable Long id)
    {
        beerService.deleteBeerById(id);
    }

    /*
        PUT example via Postman where we change the first beer (id 1): http://localhost:8080/beer/1
        Raw body example with all fields changed (Make sure to put in all fields except ID in the JSON body you are sending)
            {
                "name": "Modelo Black",
                "description": "Made with Love 2",
                "imageUrl": "https://toppng.com/uploads/preview/modelo-negra-modelo-negra-modelo-beer-negra-11563230299umq7xr4tbj.png",
                "abvPercent": 4.5,
                "type": "Lager"
            }
     */
    @PutMapping("/beer/{id}")
    public void updateBeer(@RequestBody Beer beer, @PathVariable Long id)
    {
        beerService.updateBeer(beer, id);
    }
}