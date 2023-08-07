package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.repository.SecurityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static java.util.Collections.addAll;

@Service
public class SecurityHandler implements ISecurityService
{
    private SecurityRepository itsSecuritiesRepo;

    public SecurityHandler(SecurityRepository securityRepo )
    {
        itsSecuritiesRepo = securityRepo;
    }

    @Override
    public List<Security> getAllSecurities()
    {
        return itsSecuritiesRepo.findAll();
    }

    @Override
    public Security addSecurity(Security theSecurity)
    {
        return itsSecuritiesRepo.save( theSecurity );
    }

    @Override
    public boolean removeSecurity(long id)
    {
        boolean result = false;
        Optional<Security> theSecurity = Optional.ofNullable(itsSecuritiesRepo.findById(id));
        if(theSecurity.isPresent())
        {
            itsSecuritiesRepo.delete(theSecurity.get());
            result = true;
        }
        return  result;
    }

    @Override
    public Security getSecurityByID(long id)
    {
        return itsSecuritiesRepo.findById(id);
    }

    //@Override
    public Security getSecurityByIssuerName(String issuerName) {
        return null;
    }

    /* @Override
      public Security getSecurityByIssuerName(String issuerName )
     {
          Security securityToFind = new Security();
          securityToFind.setIssuerName(issuerName);
          List<Security> securities = itsSecuritiesRepo.findByIssuerName(securityToFind);
          Security result = null;

          if( securities.size() == 1)
              result = securities.get(0);

          return result;
      }*/
    @Override
    public Security updateSecurityDetails(Security securityToUpdate)
    {
        return itsSecuritiesRepo.save( securityToUpdate );
    }

    public List<Security> getByDate(int day, int month, int year){
        String date = day+"/"+month+"/"+year;
        List<Security> list = itsSecuritiesRepo.findByBondMaturityDate(date);
        if(day < 10){
            String temp = "0" + date;
            date = temp;
        }
        List<Security> list2 = Stream.concat(list.parallelStream(), itsSecuritiesRepo.findByBondMaturityDate(date).parallelStream())
                .collect(Collectors.toList());
        if(month < 10) {
            String temp = date.substring(0, 3) + "0" + date.substring(3);
            date =temp;
        }
        List<Security> finalList = Stream.concat(list2.parallelStream(), itsSecuritiesRepo.findByBondMaturityDate(date).parallelStream())
                .collect(Collectors.toList());
        return finalList;
    }

    public List<Security> getByDateT5(){
        Calendar calendar = Calendar.getInstance();
        return getByDateT5Date(Calendar.DAY_OF_MONTH,Calendar.MONTH,Calendar.YEAR);
    }

    public List<Security> getByDateT5Date(int nday, int nmonth, int nyear){
        Calendar calendar = Calendar.getInstance();
        calendar.set(nyear,nmonth,nday);
        calendar.add(Calendar.DAY_OF_YEAR, -5);
        int year = calendar.get(Calendar.YEAR);
        int month = calendar.get(Calendar.MONTH);
        int day = calendar.get(Calendar.DAY_OF_MONTH);
        List<Security> list = getByDate(day,month,year);
        for(int i = 0; i < 10; i++){
            calendar.add(Calendar.DAY_OF_YEAR, 1);
            year = calendar.get(Calendar.YEAR);
            month = calendar.get(Calendar.MONTH);
            day = calendar.get(Calendar.DAY_OF_MONTH);
            System.out.println(day +"/"+month+"/"+year);
            List<Security> list2 = Stream.concat(list.parallelStream(), getByDate(day,month,year).parallelStream())
                    .collect(Collectors.toList());
            list = list2;
        }
        return list;
    }
    public List<Security> getByRedeemed(){
        return itsSecuritiesRepo.findByRedeemed(1);
    }
    public Security redeem(long id ){
        Security securityToUpdate = itsSecuritiesRepo.findById(id);
        securityToUpdate.setRedeemed(1);
        return itsSecuritiesRepo.save( securityToUpdate );
    }
}
