package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.service.SecurityHandler;
import org.springdoc.core.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class SecurityController {
    private SecurityHandler SecurityHandler;
    @Autowired
    public SecurityController(SecurityHandler sS){
        SecurityHandler = sS;
    }
    @GetMapping("/securities")
    public List<Security> getAllSecurities() {
        return SecurityHandler.getAllSecurities();
    }
    @GetMapping("/securities/{day}/{month}/{year}")
    public List<Security> getSecuritiesByDate(@PathVariable(value="day")int day,
    @PathVariable(value = "month")int month, @PathVariable(value="year") int year
    ){
        return SecurityHandler.getByDate(day,month,year);
    }
    @GetMapping("/securities/T5")
    public List<Security> getSecuritiesByDate(){
        return SecurityHandler.getByDateT5();
    }
    @GetMapping("/securities/T5/{day}/{month}/{year}")
    public List<Security> getSecuritiesT5ByDate(@PathVariable(value="day")int day,
                                                @PathVariable(value = "month")int month, @PathVariable(value="year") int year){
        return SecurityHandler.getByDateT5Date(day,month,year);
    }
    @GetMapping("/securities/redeem")
    public List<Security> getByRedeem(){
        return SecurityHandler.getByRedeemed();
    }
    @PostMapping("/securities/redeem/{id}")
    public Security getByRedeem(@PathVariable(value = "id") long id){
        return SecurityHandler.redeem(id);
    }
}
