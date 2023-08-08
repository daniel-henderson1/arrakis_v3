package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.CounterParty;
import com.db.grad.javaapi.repository.CounterPartyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CounterPartyService {
    @Autowired
    private CounterPartyRepository itsCounterPartyRepo;

    public CounterPartyService(CounterPartyRepository counterPartyRepo ) {
        itsCounterPartyRepo = counterPartyRepo;
    }
    public CounterParty getCounterPartyByID(long id){
        return itsCounterPartyRepo.findById(id);
    }
}
