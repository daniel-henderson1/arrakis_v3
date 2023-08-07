import React, { useState, useEffect } from "react";
import { findUpcoming } from "../services/UpcomingServices";
import { DataGrid } from '@mui/x-data-grid';
import { Box, TextField } from "@mui/material";
import styles from "./pets/Pets.module.css";
import { Button } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";


export const UpcomingPage = () => {
    const [securities, setSecurities] = useState([]);
    const [date, setDate] = useState("");
    const [dateFinal, setDateFinal] = useState("");
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


    const handleDateInput = (event) => {
        setDate(event.target.value);
    }

    const handleSubmit = () => {
        console.log(date)
        setDateFinal(date)
    }

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

    useEffect(() => {
      findUpcoming(dateFinal)
            .then(({data}) => {
            setSecurities(data);
            });
    }, [dateFinal]);

    const columnDef = [
      {field: 'id', headerName: 'ID', flex: 1},
      {field: 'couponPercent', headerName: 'Coupon %'},
      {field: 'bondCurrency', headerName: 'Currency'},
      {field: 'cusip', headerName: 'CUSIP', flex: 1},
      {field: 'bondCurrency', headerName: 'Currency', flex: 1},
      {field: 'faceValue', headerName: 'Face Value', flex: 1},
      {field: 'isin', headerName: 'ISIN'},
      {field: 'issuerName', headerName: 'Issuer'},
      {field: 'bondMaturityDate', headerName: 'Maturity Date', flex: 1},
      {field: 'status', headerName: 'Status', flex: 1},
      {field: 'type', headerName: 'Type', flex: 1}
    ]

    const rowDef = []
    securities.map(security => 
      rowDef.push({
            id: security.id, 
            couponPercent: security.couponPercent,
            bondCurrency: security.bondCurrency,
            cusip: security.cusip,
            faceValue: security.faceValue,
            isin: security.isin,
            issuerName: security.issuerName,
            bondMaturityDate: security.bondMaturityDate,
            status: security.status,
            type: security.type
        })
    )

  return (
    <>
        <div className={styles.fields}>
        <TextField
         sx = {{ 'display': 'flex', 'flex-direction': 'row', 'justify-content': 'space-around', 'content-align': 'center'}}
         id="standard-basic" 
         variant="standard" 
         type="search"
         defaultValue={"DD/MM/YYYY"}
         onChange={handleDateInput}
         label="Date"
         />
         <Button variant="contained" color='grey' onClick={handleSubmit}>
            Submit
         </Button>
        </div>
        <Box sx={{ height: '100%', width: '100%'}}>
            <div className={styles.container}>
                <DataGrid
                    rows={rowDef}
                    columns={columnDef}
                    sx={{ maxWidth: '80%', '.MuiDataGrid-columnHeader': {
                        'background-color': '#dbb669'
                      }, '.MuiDataGrid-row:nth-child(odd)': {
                        'background-color': '#d5d9db'
                      } }}
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
                      Issuer: {issuerName}
                    <br/>
                      Maturity Date: {bondMaturityDate}
                    <br/>
                      CUSIP: {cusip}
                    <br/>
                      Status: {status}
                    <br/>
                      Type: {type}
                    <br/>
                      Coupon %: {couponPercent}
                    <br/>
                      Currency: {bondCurrency}
                    <br/>
                      Face Value: {faceValue}
                    <br/>
                      ISIN: {isin}
                </CardContent>
            </Card>
            }
            </div>
        </Box>   
    </>
  );
};
