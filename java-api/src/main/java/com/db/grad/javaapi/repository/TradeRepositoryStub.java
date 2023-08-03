package com.db.grad.javaapi.repository;


import com.db.grad.javaapi.model.Trade;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;



public class TradeRepositoryStub implements TradesRepository {


    private ArrayList<Trade> itsTrades = new ArrayList<>();

    @Override
    public Trade findById(long id) {
        Trade result = null;

        for( Trade theTrade: itsTrades)
            if(theTrade.getId() == id ) {
                result = theTrade;
                break;
            }
        return result;
    }

    public Trade getTradeBySecurityID(long id){
        return null;
    }

    @Override
    public List<Trade> findAll() {
        return null;
    }

    @Override
    public List<Trade> findAll(Sort sort) {
        return null;
    }

    @Override
    public Page<Trade> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public List<Trade> findAllById(Iterable<Long> longs) {
        return null;
    }

    @Override
    public long count() {
        return 0;
    }

    @Override
    public void deleteById(Long aLong) {

    }

    @Override
    public void delete(Trade entity) {

    }

    @Override
    public void deleteAllById(Iterable<? extends Long> longs) {

    }

    @Override
    public void deleteAll(Iterable<? extends Trade> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public <S extends Trade> S save(S entity) {
        return null;
    }

    @Override
    public <S extends Trade> List<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<Trade> findById(Long aLong) {
        return Optional.empty();
    }

    @Override
    public boolean existsById(Long aLong) {
        return false;
    }

    @Override
    public void flush() {

    }

    @Override
    public <S extends Trade> S saveAndFlush(S entity) {
        return null;
    }

    @Override
    public <S extends Trade> List<S> saveAllAndFlush(Iterable<S> entities) {
        return null;
    }

    @Override
    public void deleteAllInBatch(Iterable<Trade> entities) {

    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Long> longs) {

    }

    @Override
    public void deleteAllInBatch() {

    }

    @Override
    public Trade getOne(Long aLong) {
        return null;
    }

    @Override
    public Trade getById(Long aLong) {
        return null;
    }

    @Override
    public Trade getReferenceById(Long aLong) {
        return null;
    }

    @Override
    public <S extends Trade> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends Trade> List<S> findAll(Example<S> example) {
        return null;
    }

    @Override
    public <S extends Trade> List<S> findAll(Example<S> example, Sort sort) {
        return null;
    }

    @Override
    public <S extends Trade> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends Trade> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends Trade> boolean exists(Example<S> example) {
        return false;
    }

    @Override
    public <S extends Trade, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return null;
    }
}