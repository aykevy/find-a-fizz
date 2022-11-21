package com.techelevator.jpa.controller.user_relations;

import com.techelevator.jpa.entity.user_relations.Ownership;
import com.techelevator.jpa.service.user_relations.OwnershipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin
@RestController
public class OwnershipController {

    @Autowired
    private OwnershipService ownershipService;

    /* GET example: http://localhost:8080/ownerships */
    @GetMapping("/ownerships")
    public List<Ownership> getAllOwnershipRelations() {
        return ownershipService.getAllOwnershipRelations();
    }

    /* GET example: http://localhost:8080/ownership/userId?userId=15 */
    @GetMapping("/ownership/userId")
    public List<Ownership> getAllOwnershipByUserId(@RequestParam Long userId)
    {
        return ownershipService.getAllOwnershipByUserId(userId);
    }

    /*
        POST example via Postman adding a new ownership: http://localhost:8080/ownership
        Raw body example (Make sure to put in all fields except ID in the JSON body you are sending)
            {
                "userId": 10,
                "breweryId": 15
            }
     */
    @PostMapping("/ownership")
    public void addOwnership(@RequestBody Ownership ownership)
    {
        ownershipService.addOwnership(ownership);
    }

    /* DELETE example on Postman (Remember ID is the entry id on the table): http://localhost:8080/ownership/1 */
    @DeleteMapping("/ownership/{id}")
    public void deleteOwnershipById(@PathVariable Long id)
    {
        ownershipService.deleteOwnershipById(id);
    }
}