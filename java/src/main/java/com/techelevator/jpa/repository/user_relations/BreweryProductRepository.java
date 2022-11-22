package com.techelevator.jpa.repository.user_relations;

import com.techelevator.jpa.entity.user_relations.BreweryProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BreweryProductRepository extends JpaRepository<BreweryProduct, Long> {
    List<BreweryProduct> findByBreweryId(long breweryId);
}
