package com.techelevator.jpa.service.favorites;

import com.techelevator.jpa.entity.favorites.BreweryFavorite;
import com.techelevator.jpa.repository.favorites.BreweryFavoriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BreweryFavoriteService {

    private BreweryFavoriteRepository breweryFavoriteRepository;

    @Autowired
    public BreweryFavoriteService(BreweryFavoriteRepository breweryFavoriteRepository) {
        this.breweryFavoriteRepository = breweryFavoriteRepository;
    }

    public List<BreweryFavorite> getAllBreweryFavorites() {
        return breweryFavoriteRepository.findAll();
    }

    public List<BreweryFavorite> getAllBreweryFavoritesByUserId(Long userId) {
        return breweryFavoriteRepository.findByUserId(userId);
    }

    public void addBreweryFavorite(BreweryFavorite breweryFavorite)
    {
        breweryFavoriteRepository.save(breweryFavorite);
    }

    public void deleteBreweryFavoriteById(Long id)
    {
        breweryFavoriteRepository.deleteById(id);
    }
}