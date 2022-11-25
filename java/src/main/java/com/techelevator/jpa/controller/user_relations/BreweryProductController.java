package com.techelevator.jpa.controller.user_relations;

import com.techelevator.jpa.entity.user_relations.BreweryProduct;
import com.techelevator.jpa.service.user_relations.BreweryProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin
@RestController
public class BreweryProductController {

    @Autowired
    private BreweryProductService breweryProductService;

    /* GET example: http://localhost:8080/breweryProducts */
    @GetMapping("/breweryProducts")
    public List<BreweryProduct> getAllBreweryProductRelations() {
        return breweryProductService.getAllBreweryProductRelations();
    }

    /* GET example: http://localhost:8080/breweryProduct/breweryId?breweryId=1 */
    @GetMapping("/breweryProduct/breweryId")
    public List<BreweryProduct> getAllBreweryProductByBreweryId(@RequestParam Long breweryId)
    {
        return breweryProductService.getAllBreweryProductByBreweryId(breweryId);
    }

    /* GET example: http://localhost:8080/breweryProduct/beerId?beerId=1 */
    @GetMapping("/breweryProduct/beerId")
    public List<BreweryProduct> getAllBreweryProductByBeerId(@RequestParam Long beerId)
    {
        return breweryProductService.getAllBreweryProductByBeerId(beerId);
    }

    /*
        POST example via Postman adding a new brewery product: http://localhost:8080/breweryProduct
        Raw body example (Make sure to put in all fields except ID in the JSON body you are sending)
            {
                "breweryId": 1,
                "beerId": 16
            }
     */
    @PostMapping("/breweryProduct")
    public void addBreweryProduct(@RequestBody BreweryProduct breweryProduct)
    {
       breweryProductService.addBreweryProduct(breweryProduct);
    }

    /* DELETE example on Postman (Remember ID is the entry id on the table): http://localhost:8080/breweryProduct/1 */
    @DeleteMapping("/breweryProduct/{id}")
    public void deleteBreweryProductById(@PathVariable Long id)
    {
        breweryProductService.deleteBreweryProductById(id);
    }
}