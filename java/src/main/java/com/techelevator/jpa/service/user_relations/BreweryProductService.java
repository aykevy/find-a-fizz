package com.techelevator.jpa.service.user_relations;

import com.techelevator.jpa.entity.user_relations.BreweryProduct;
import com.techelevator.jpa.repository.user_relations.BreweryProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BreweryProductService {

    private BreweryProductRepository breweryProductRepository;

    @Autowired
    public BreweryProductService(BreweryProductRepository breweryProductRepository) {
        this.breweryProductRepository = breweryProductRepository;
    }

    public List<BreweryProduct> getAllBreweryProductRelations() {
        return breweryProductRepository.findAll();
    }

    public List<BreweryProduct> getAllBreweryProductByBreweryId(Long breweryId) {
        return breweryProductRepository.findByBreweryId(breweryId);
    }

    public void addBreweryProduct(BreweryProduct breweryProduct)
    {
        breweryProductRepository.save(breweryProduct);
    }

    public void deleteBreweryProductById(Long id)
    {
        breweryProductRepository.deleteById(id);
    }
}