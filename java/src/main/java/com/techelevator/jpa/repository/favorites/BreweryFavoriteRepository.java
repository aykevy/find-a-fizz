package com.techelevator.jpa.repository.favorites;

import com.techelevator.jpa.entity.favorites.BreweryFavorite;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BreweryFavoriteRepository extends JpaRepository<BreweryFavorite, Long> {
    List<BreweryFavorite> findByUserId(Long userId);
}
