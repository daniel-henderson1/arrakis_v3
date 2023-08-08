package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.service.TradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class TradesController {
    private TradeService TradeService;
    @Autowired
    public TradesController(TradeService sT){
        TradeService = sT;
    }
    @GetMapping("/trades/{id}")
    public Trade getTradeById(@PathVariable(value = "id") long id){
        return TradeService.getTradeByID(id);
    }
    @GetMapping("/trades/security/{id}")
    public Trade getTradeBySecurityID(@PathVariable(value = "id") long id){
        return TradeService.getTradeBySecurityID(id);
    }
    @GetMapping("/trades")
    public List<Trade> getAllTrades() {
        return TradeService.getAllTrades();
    }
    @GetMapping("/trades/book/{id}")
    public List<Trade> getTradeByBookID(@PathVariable(value = "id") long id){
        return TradeService.getTradeByBookID(id);
    }
    @GetMapping("/trades/counterParty/{id}")
    public List<Trade> getTradeByCounterParty(@PathVariable(value = "id") long id){
        return TradeService.getTradeByCounterPartyID(id);
    }
}