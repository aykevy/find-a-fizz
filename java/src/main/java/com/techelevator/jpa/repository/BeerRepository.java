package com.techelevator.jpa.repository;

import com.techelevator.jpa.entity.Beer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import javax.transaction.Transactional;
import java.math.BigDecimal;

@Repository
public interface BeerRepository extends JpaRepository<Beer, Long>
{
    /* Note when doing an update here, use the Beer class variable names, not the table names in Postgres. */
    @Query("UPDATE Beer SET name=:name, description=:description, imageUrl=:imageUrl, abvPercent=:abvPercent, type=:type WHERE id=:id")
    @Modifying
    @Transactional
    int updateBeer(String name, String description, String imageUrl, BigDecimal abvPercent, String type, Long id);

    @Query("DELETE FROM BeerReview WHERE beerId=:id")
    @Modifying
    @Transactional
    int deleteBeerReviewCascade(@Param("id") Long id);

    @Query("DELETE FROM BreweryProduct WHERE beerId=:id")
    @Modifying
    @Transactional
    int deleteBreweryProductCascade(@Param("id") Long id);
}