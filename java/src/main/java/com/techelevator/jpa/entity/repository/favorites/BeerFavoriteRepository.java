package com.techelevator.jpa.entity.repository.favorites;

import com.techelevator.jpa.entity.favorites.BeerFavorite;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BeerFavoriteRepository extends JpaRepository<BeerFavorite, Long> {
    List<BeerFavorite> findByUserId(Long userId);

}
