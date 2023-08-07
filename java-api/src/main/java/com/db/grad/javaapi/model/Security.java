package com.db.grad.javaapi.model;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "security")
public class Security
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;
    @Column(name = "couponpercent",nullable = false)
    private float couponPercent;
    @Column(name = "bondcurrency", nullable = false)
    private String bondCurrency;
    @Column(name = "cusip", nullable = false)
    private String cusip;
    @Column(name = "facevalue", nullable = false)
    private long faceValue;
    @Column(name = "isin", nullable = false)
    private String isin;
    @Column(name = "issuername", nullable = false)
    private String issuerName;
    @Column(name = "bondmaturitydate", nullable = false)
    private String BondMaturityDate;
    @Column(name = "status", nullable = false)
    private String status;
    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "redeemed", nullable = false)
    private int redeemed;


    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public float getCouponPercent() {
        return couponPercent;
    }
    public void setCouponPercent(float couponPercent) {
        this.couponPercent = couponPercent;
    }

    public String getBondCurrency() {
        return bondCurrency;
    }
    public void setBondCurrency(String bondCurrency) {
        this.bondCurrency = bondCurrency;
    }

    public String getCusip() {
        return cusip;
    }
    public void setCusip(String cusip) {
        this.cusip = cusip;
    }

    public long getFaceValue() {
        return faceValue;
    }
    public void setFaceValue(long faceValue) {
        this.faceValue = faceValue;
    }

    public String getIsin() {
        return isin;
    }
    public void setIsin(String isin) {
        this.isin = isin;
    }

    public String getIssuerName() {
        return issuerName;
    }
    public void setIssuerName(String issuerName) {
        this.issuerName = issuerName;
    }

    public String getBondMaturityDate() {
        return BondMaturityDate;
    }
    public void setBondMaturityDate(String bondMaturityDate) {
        BondMaturityDate = bondMaturityDate;
    }

    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }

    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }

    public int getRedeemed() {
        return redeemed;
    }

    public void setRedeemed(int redeemed) {
        this.redeemed = redeemed;
    }
}
