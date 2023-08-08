package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.CounterParty;
import com.db.grad.javaapi.service.CounterPartyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class CounterPartyController {
    private CounterPartyService counterPartyService;
    @Autowired
    public CounterPartyController(CounterPartyService cS)
    {
        counterPartyService = cS;
    }
    @GetMapping("/counterParty/{id}")
    public CounterParty getCounterPartyByID(@PathVariable(value="id")long id) {
        return counterPartyService.getCounterPartyByID(id);
    }

}
