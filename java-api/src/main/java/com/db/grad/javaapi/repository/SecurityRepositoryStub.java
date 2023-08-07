package com.db.grad.javaapi.repository;


import com.db.grad.javaapi.model.Security;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;



public class SecurityRepositoryStub implements SecurityRepository {


    private ArrayList<Security> itsSecurities = new ArrayList<>();


    public List<Security> findByBondMaturityDateT5(String date){return null;}
    //@Override
    public List<Security> findByBondMaturityDate(String date) {

        return null;
    }

    @Override
    public List<Security> findByRedeemed(int redeem) {
        return null;
    }

    @Override
    public Security findById(long id) {
        Security result = null;

        for( Security theSecurity: itsSecurities)
            if(theSecurity.getId() == id ) {
                result = theSecurity;
                break;
            }
        return result;
    }

    public List<Security> findByBondMaturityDate(Security aSecurity) {
        ArrayList<Security> result = new ArrayList<>();

        for(Security theSecurity : itsSecurities) {
            if( theSecurity.getBondMaturityDate().equalsIgnoreCase(aSecurity.getBondMaturityDate()) ) {
                result.add(theSecurity);
            }
        }
        return result;

    }

    @Override
    public List<Security> findAll() {
        return null;
    }

    @Override
    public List<Security> findAll(Sort sort) {
        return null;
    }

    @Override
    public Page<Security> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public List<Security> findAllById(Iterable<Long> longs) {
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
    public void delete(Security entity) {

    }

    @Override
    public void deleteAllById(Iterable<? extends Long> longs) {

    }

    @Override
    public void deleteAll(Iterable<? extends Security> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public <S extends Security> S save(S entity) {
        return null;
    }

    @Override
    public <S extends Security> List<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<Security> findById(Long aLong) {
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
    public <S extends Security> S saveAndFlush(S entity) {
        return null;
    }

    @Override
    public <S extends Security> List<S> saveAllAndFlush(Iterable<S> entities) {
        return null;
    }

    @Override
    public void deleteAllInBatch(Iterable<Security> entities) {

    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Long> longs) {

    }

    @Override
    public void deleteAllInBatch() {

    }

    @Override
    public Security getOne(Long aLong) {
        return null;
    }

    @Override
    public Security getById(Long aLong) {
        return null;
    }

    @Override
    public Security getReferenceById(Long aLong) {
        return null;
    }

    @Override
    public <S extends Security> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends Security> List<S> findAll(Example<S> example) {
        return null;
    }

    @Override
    public <S extends Security> List<S> findAll(Example<S> example, Sort sort) {
        return null;
    }

    @Override
    public <S extends Security> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends Security> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends Security> boolean exists(Example<S> example) {
        return false;
    }

    @Override
    public <S extends Security, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return null;
    }

}
