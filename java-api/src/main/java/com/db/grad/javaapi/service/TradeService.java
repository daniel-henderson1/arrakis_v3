package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.TradesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class TradeService implements ITradesService{
    private TradesRepository itsTradesRepo;

    @Autowired
    public TradeService(TradesRepository TradeRepo)
    {
        itsTradesRepo = TradeRepo;
    }

    @Override
    public List<Trade> getAllTrades() {
        return itsTradesRepo.findAll();
    }

    @Override
    public Trade addTrade(Trade theTrade) {
        return itsTradesRepo.save(theTrade);
    }
    public List<Trade> getTradeByCounterPartyID(long id){return itsTradesRepo.getTradeByCounterPartyID(id);}
    public List<Trade> getTradeByBookID (long id){return itsTradesRepo.getTradeByBookID(id);}
    public Trade getTradeBySecurityID(long id){
        return itsTradesRepo.getTradeBySecurityID(id);
    }
    @Override
    public boolean removeTrade(long id)
    {
        boolean result = false;
        Optional<Trade> theTrade = Optional.ofNullable(itsTradesRepo.findById(id));
        if(theTrade.isPresent())
        {
            itsTradesRepo.delete(theTrade.get());
            result = true;
        }
        return  result;

    }
    @Override
    public Trade getTradeByID(long id)
    {
        return itsTradesRepo.findById(id);
    }

    @Override
    public Trade updateTradeDetails(Trade TradeToUpdate)
    {
        return itsTradesRepo.save( TradeToUpdate );
    }
}