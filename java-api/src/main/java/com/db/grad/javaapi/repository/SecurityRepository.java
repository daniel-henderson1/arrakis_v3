package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Security;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SecurityRepository extends JpaRepository<Security, Long> {

    @Query(nativeQuery = true, value = "select * from security where bondMaturityDate = :date")
    List<Security> findByBondMaturityDate(String date);
    //List<Security> findByBondMaturityDateT5(String date);
    List<Security> findByRedeemed(int redeem);
    Security  findById( long id );
}
