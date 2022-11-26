package com.techelevator.jpa.controller.favorites;

import com.techelevator.jpa.entity.favorites.BeerFavorite;
import com.techelevator.jpa.service.favorites.BeerFavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@CrossOrigin
@RestController
public class BeerFavoriteController {

    @Autowired
    private BeerFavoriteService beerFavoriteService;

    /* GET example: http://localhost:8080/beerFavorites */
    @GetMapping("/beerFavorites")
    public List<BeerFavorite> getAllBeerFavorites() {
        return beerFavoriteService.getAllBeerFavorites();
    }

    /* GET example: http://localhost:8080/beerFavorites/userId?userId=1 */
    @GetMapping("/beerFavorites/userId")
    public List<BeerFavorite> getAllBeerFavoritesByUserId(@RequestParam Long userId)
    {
        return beerFavoriteService.getAllBeerFavoritesByUserId(userId);
    }

    /*
        POST example via Postman adding a new beer favorite: http://localhost:8080/beerFavorite
        Raw body example (Make sure to put in all fields except ID in the JSON body you are sending)
            {
                "userId": 3,
                "beerId": 1,
            }
     */
    @PostMapping("/beerFavorite")
    public BeerFavorite addBeerFavorite(@RequestBody BeerFavorite beerFavorite)
    {
     return    beerFavoriteService.addBeerFavorite(beerFavorite);
    }

    /* DELETE example on Postman (Remember ID is the entry id on the table): http://localhost:8080/beerFavorite/43 */
    @DeleteMapping("/beerFavorite/{id}")
    public void deleteBeerFavoriteById(@PathVariable Long id)
    {
        beerFavoriteService.deleteBeerFavoriteById(id);
    }
}