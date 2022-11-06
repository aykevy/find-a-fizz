package com.techelevator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class BeerService {

    private BeerRepository beerRepository;

    @Autowired
    public BeerService(BeerRepository beerRepository) {
        this.beerRepository = beerRepository;
    }

    public Optional<Beer> getBeerById(Long id)
    {
        return beerRepository.findById(id);
    }

    public List<Beer> getAllBeers() {
        return beerRepository.findAll();
    }

    public void addBeer(Beer beer)
    {
        beerRepository.save(beer);
    }

    public void deleteBeerById(Long id)
    {
        beerRepository.deleteById(id);
    }
}
