package com.techelevator.jpa.repository.user_relations;

import com.techelevator.jpa.entity.user_relations.Ownership;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface OwnershipRepository extends JpaRepository<Ownership, Long> {
    List<Ownership> findByUserId(Long userId);
}