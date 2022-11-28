package com.techelevator.jpa.service.user_relations;

import com.techelevator.jpa.entity.user_relations.Ownership;
import com.techelevator.jpa.entity.repository.user_relations.OwnershipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class OwnershipService {

    private OwnershipRepository ownershipRepository;

    @Autowired
    public OwnershipService(OwnershipRepository ownershipRepository) {
        this.ownershipRepository = ownershipRepository;
    }

    public List<Ownership> getAllOwnershipRelations() {
        return ownershipRepository.findAll();
    }

    public List<Ownership> getAllOwnershipByUserId(Long userId) {
        return ownershipRepository.findByUserId(userId);
    }

    public void addOwnership(Ownership ownership)
    {
        ownershipRepository.save(ownership);
    }

    public void deleteOwnershipById(Long id)
    {
        ownershipRepository.deleteById(id);
    }
}