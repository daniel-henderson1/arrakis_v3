import React, { useState, useEffect } from "react";
import { findSecurities } from "../services/SecurityServices";
import { DataGrid } from '@mui/x-data-grid';
import { Box } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import styles from "./pets/Pets.module.css";


export const HomePage = () => {
    const [securities, setSecurities] = useState([]);
    const [cardMessage, setCardMessage] = useState(false);
    const [id, setID] = useState();
    const [couponPercent, setCouponPercent] = useState();
    const [bondCurrency, setBondCurrency] = useState("");
    const [cusip, setCusip] = useState();
    const [faceValue, setFaceValue] = useState();
    const [isin, setIsin] = useState();
    const [issuerName, setIssuerName] = useState("");
    const [bondMaturityDate, setBondMaturityDate] = useState();
    const [status, setStatus] = useState("");
    const [type, setType] = useState("");

    useEffect(() => {
      findSecurities()
            .then(({data}) => {
            setSecurities(data);
            });
    }, []);
    const columnDef = [
    //   {field: 'id', headerName: 'ID', flex: 1},
    //   {field: 'couponPercent', headerName: 'Coupon %'},
    //   {field: 'bondCurrency', headerName: 'Currency'},
      {field: 'cusip', headerName: 'CUSIP', flex: 1},
      {field: 'bondCurrency', headerName: 'Currency', flex: 1},
      {field: 'faceValue', headerName: 'Face Value', flex: 1},
    //   {field: 'isin', headerName: 'ISIN'},
    //   {field: 'issuerName', headerName: 'Issuer'},
      {field: 'bondMaturityDate', headerName: 'Maturity Date', flex: 1},
      {field: 'status', headerName: 'Status', flex: 1},
      {field: 'type', headerName: 'Type', flex: 1}
    ]

    const rowDef = []
    securities.map(security => 
      rowDef.push({
            id: security.id, 
            couponPercent: security.couponpercent,
            bondCurrency: security.bondcurrency,
            cusip: security.cusip,
            faceValue: security.facevalue,
            isin: security.isin,
            issuerName: security.issuername,
            bondMaturityDate: security.bondmaturitydate,
            status: security.status,
            type: security.type
        })
    )

    const handleRowClick = (params) => {
        setID(params.row.id);
        setCouponPercent(params.row.couponPercent);
        setBondCurrency(params.row.bondCurrency);
        setCusip(params.row.cusip);
        setFaceValue(params.row.faceValue);
        setIsin(params.row.isin);
        setIssuerName(params.row.issuerName);
        setBondMaturityDate(params.row.bondMaturityDate);
        setStatus(params.row.status);
        setType(params.row.type);
        if (params.row.id !== id) {
            setCardMessage(true);
        } else {
            setCardMessage(!cardMessage);
        }
    }

  return (
    <>
          <Box sx={{ height: '100%', width: '100%'}}>
            <div className={styles.container}>
            <DataGrid
              rows={rowDef}
              columns={columnDef}
              sx={{ maxWidth: '75%' }}
              onRowClick={handleRowClick}
              maxColumns={6}
              />
            {cardMessage &&
            <Card sx={{ minWidth: '25%'}}>
                <CardContent>
                    <b>
                        Bond ID: {id}
                    </b>
                    <br/>
                    {issuerName}
                    <br/>
                    {bondMaturityDate}
                    <br/>
                    {cusip}
                    <br/>
                    {status}
                    <br/>
                    {type}
                    <br/>
                    {couponPercent}
                    <br/>
                    {bondCurrency}
                    <br/>
                    {faceValue}
                    <br/>
                    {isin}
                </CardContent>
            </Card>
            }
            </div>
          </Box>
        
    </>
  )
};
