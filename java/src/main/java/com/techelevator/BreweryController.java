package com.techelevator;

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
        POST Example via Postman adding a new brewery: http://localhost:8080/brewery
        Raw body example:
            { "name": "Your Momma", "breweryType": "micro", "street": "420 Elmo Street",
              "city": "San Diego", "state": "California", "postalCode": "12345",
              "websiteUrl": null, "phone": "1234567890", "createdAt": "2022-11-04", "updatedAt": "2022-11-04",
              "country": "United States", "longitude": null, "latitude": null, "address2": null, "address3": null,
              "countyProvince": null, "obdbId": null, "text": null }
     */
    @PostMapping("/brewery")
    public void addBrewery(@RequestBody Brewery brewery)
    {
        System.out.println("Added Brewery!");
        breweryService.addBrewery(brewery);
    }

    /*
        DELETE example on Postman: http://localhost:8080/brewery/1
     */
    @DeleteMapping("/brewery/{id}")
    public void deleteBreweryById(@PathVariable Long id)
    {
        breweryService.deleteBreweryById(id);
    }


    /*
        Design wise, we only expect the front end to ask and request changes to the following fields:
           -name, breweryType, street, city, state, postalCode, websiteUrl, phone
           -These are the only fields that will change (for now) and we still require a full RequestBody,
            so make sure to send a RequestBody with all the required fields above and containing either the new or old version along
            with other fields like latitude longitude (these can be blank or null because it won't be updated to database).
           -If you leave one of required fields above blank and null, the db will change those fields to null even if we didn't
            intend to change it.

         Put Example via Postman where we change the first brewery (id 1) in our db: http://localhost:8080/brewery/1
         { "name": "Yo 69", "breweryType": "micro", "street": "400 Brown Cir", "city": "State",
            "state": "Indiana", "postalCode": "1234506", "websiteUrl": null, "phone": "6308165790", "createdAt": "2022-11-05",
            "updatedAt": "2022-11-04", "country": "United States", "longitude": -86.627954, "latitude": 41.289715, "address2": null,
            "address3": null, "countyProvince": null, "obdbId": null, "text": null }
     */
    @PutMapping("/brewery/{id}")
    public void updateBrewery(@RequestBody Brewery brewery, @PathVariable Long id)
    {
        breweryService.updateBreweryById(brewery, id);
    }


}