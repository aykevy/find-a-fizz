package com.techelevator.jpa.service.favorites;

import com.techelevator.jpa.entity.favorites.BeerFavorite;
import com.techelevator.jpa.entity.repository.favorites.BeerFavoriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BeerFavoriteService {

    private BeerFavoriteRepository beerFavoriteRepository;

    @Autowired
    public BeerFavoriteService(BeerFavoriteRepository beerFavoriteRepository) {
        this.beerFavoriteRepository = beerFavoriteRepository;
    }

    public List<BeerFavorite> getAllBeerFavorites() {
        return beerFavoriteRepository.findAll();
    }

    public List<BeerFavorite> getAllBeerFavoritesByUserId(Long userId) {
        return beerFavoriteRepository.findByUserId(userId);
    }

    public BeerFavorite addBeerFavorite(BeerFavorite beerFavorite)
    {
        return beerFavoriteRepository.save(beerFavorite);
    }

    public void deleteBeerFavoriteById(Long id)
    {
        beerFavoriteRepository.deleteById(id);
    }
}