package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.repository.SecurityRepository;
import com.db.grad.javaapi.repository.SecurityRepositoryStub;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SecurityServiceTest {

    @BeforeEach
    void setUp() {

    }

    private SecurityRepository securityRepo = new SecurityRepositoryStub();

    @Test
    void getAllSecurities() {
        //arrange
        SecurityService cut = new SecurityService(securityRepo);
        Security theSecurity = new Security();
        theSecurity.setIssuerName("Mark");
        theSecurity.setId(1);
        theSecurity.setBondCurrency("dollar");
        theSecurity.setBondMaturityDate("23/10/2023");
        cut.addSecurity(theSecurity);

        boolean expectedResult = true;
        boolean actualResult = false;

        //act
        if (cut.getAllSecurities() != null)
            actualResult = true;
        else
            actualResult = false;

        //assert
        assertEquals( expectedResult, actualResult );

    }

    @Test
    void addSecurity() {
        Security theSecurity = new Security();
        SecurityService cut = new SecurityService(securityRepo);
        boolean result = false;
        cut.addSecurity(theSecurity);
        for(Security s: securityRepo.findAll()){
            if(s == theSecurity){
                result = true;
            }
        }
        assertEquals(true,result);
    }

    @Test
    void removeSecurity() {}

    @Test
    void getSecurityByID() {
        Security s = new Security();
        SecurityService cut = new SecurityService(securityRepo);
        s.setId(1000);
        boolean found = false;
        cut.addSecurity(s);
        if(s == cut.getSecurityByID(1000)){
            found = true;
        }
        assertEquals(true,found);
    }

    @Test
    void updateSecurityDetails() {
        SecurityService cut = new SecurityService(securityRepo);
        Security theSecurity = new Security();
        theSecurity.setIssuerName("Mark");
        theSecurity.setId(1);
        theSecurity.setBondCurrency("dollar");
        theSecurity.setBondMaturityDate("23/10/2023");
        cut.addSecurity(theSecurity);
        theSecurity.setIssuerName("James");
        cut.updateSecurityDetails(theSecurity);
        boolean expectedResult = true;
        boolean actualResult = false;

        //act
        for(Security s: securityRepo.findAll()){
            if(s == theSecurity){
                actualResult= true;
            }
        }

        //assert
        assertEquals( expectedResult, actualResult );
    }
}