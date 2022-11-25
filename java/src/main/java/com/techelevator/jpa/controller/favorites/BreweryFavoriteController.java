package com.techelevator.jpa.controller.favorites;

import com.techelevator.jpa.entity.favorites.BreweryFavorite;
import com.techelevator.jpa.service.favorites.BreweryFavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class BreweryFavoriteController {

    @Autowired
    private BreweryFavoriteService breweryFavoriteService;

    /* GET example: http://localhost:8080/breweryFavorites */
    @GetMapping("/breweryFavorites")
    public List<BreweryFavorite> getAllBreweryFavorites() {
        return breweryFavoriteService.getAllBreweryFavorites();
    }

    /* GET example: http://localhost:8080/breweryFavorites/userId?userId=1 */
    @GetMapping("/breweryFavorites/userId")
    public List<BreweryFavorite> getAllBreweryFavoritesByUserId(@RequestParam Long userId)
    {
        return breweryFavoriteService.getAllBreweryFavoritesByUserId(userId);
    }

    /*
        POST example via Postman adding a new brewery favorite: http://localhost:8080/breweryFavorite
        Raw body example (Make sure to put in all fields except ID in the JSON body you are sending)
            {
                "userId": 3,
                "breweryId": 1,
            }
     */
    @PostMapping("/breweryFavorite")
    public void addBeerFavorite(@RequestBody BreweryFavorite breweryFavorite)
    {
        breweryFavoriteService.addBreweryFavorite(breweryFavorite);
    }

    /* DELETE example on Postman (Remember ID is the entry id on the table): http://localhost:8080/breweryFavorite/2 */
    @DeleteMapping("/breweryFavorite/{id}")
    public void deleteBreweryFavoriteById(@PathVariable Long id)
    {
        breweryFavoriteService.deleteBreweryFavoriteById(id);
    }
}
