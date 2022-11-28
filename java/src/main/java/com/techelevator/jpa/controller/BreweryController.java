package com.techelevator.jpa.controller;

import com.techelevator.jpa.entity.Brewery;
import com.techelevator.jpa.service.BreweryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class BreweryController {

    @Autowired
    private BreweryService breweryService;

    /* GET example: http://localhost:8080/brewery/1 */
    @GetMapping("/brewery/{id}")
    public Optional<Brewery> getBreweryById(@PathVariable Long id)
    {
        return breweryService.getBreweryById(id);
    }

    /* GET example: http://localhost:8080/breweries */
    @GetMapping("/breweries")
    public List<Brewery> getAllBreweries() {
        return breweryService.getAllBreweries();
    }

    /* GET example: http://localhost:8080/breweries/city?city=Dallas */
    @GetMapping("/breweries/city")
    public List<Brewery> getAllBreweriesByCity(@RequestParam String city)
    {
        return breweryService.getAllBreweriesByCity(city);
    }

    /* GET example: http://localhost:8080/breweries/state?state=Texas */
    @GetMapping("/breweries/state")
    public List<Brewery> getAllBreweriesByState(@RequestParam String state)
    {
        return breweryService.getAllBreweriesByState(state);
    }

    /* GET example: http://localhost:8080/breweries/postalCode?postalCode=13005 */
    @GetMapping("/breweries/postalCode")
    public List<Brewery> getAllBreweriesByPostalCode(@RequestParam String postalCode)
    {
        return breweryService.getAllBreweriesByPostalCode(postalCode);
    }

    /*
        POST example via Postman adding a new brewery: http://localhost:8080/brewery
        Raw body example (Make sure to put in all fields except ID in the JSON body you are sending)
            { "name": "Your Momma", "breweryType": "micro", "street": "420 Elmo Street",
              "city": "San Diego", "state": "California", "postalCode": "12345",
              "websiteUrl": null, "phone": "1234567890", "createdAt": "2022-11-04", "updatedAt": "2022-11-04",
              "country": "United States", "longitude": null, "latitude": null, "address2": null, "address3": null,
              "countyProvince": null, "obdbId": null, "tags": null }
     */
    @PostMapping("/brewery")
    public Brewery addBrewery(@RequestBody Brewery brewery)
    {
        return breweryService.addBrewery(brewery);
    }

    /* DELETE example on Postman: http://localhost:8080/brewery/1 */
    @DeleteMapping("/brewery/{id}")
    public void deleteBreweryById(@PathVariable Long id)
    {
        breweryService.deleteBreweryById(id);
    }

    /*
         PUT example via Postman where we change the first brewery (id 1): http://localhost:8080/brewery/1
         Raw body example with all fields changed (Make sure to put in all fields except ID in the JSON body you are sending)
         { "name": "Kevin Brewery", "breweryType": "micro good", "street": "420 Brown Cir", "city": "Dallas",
            "state": "Kansas", "postalCode": "12345", "websiteUrl": "google.com", "phone": "6308165790", "createdAt": "2022-11-06",
            "updatedAt": "2022-11-06", "country": "United States", "longitude": -85.627954, "latitude": 51.289715, "address2": "420 Magic Rd.",
            "address3": "123 Cross Rd", "countyProvince": "Los Angeles", "obdbId": "69", "tags": "wassup" }
     */
    @PutMapping("/brewery/{id}")
    public void updateBrewery(@RequestBody Brewery brewery, @PathVariable Long id)
    {
        breweryService.updateBrewery(brewery, id);
    }
}