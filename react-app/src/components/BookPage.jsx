import React, { useState, useEffect } from "react";
import { findBook } from "../services/BookService";
import { findTrades } from "../services/TradeService";
import { DataGrid } from '@mui/x-data-grid';
import { Box, TextField } from "@mui/material";
import styles from "./pets/Pets.module.css";
import { Button } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";


export const BookPage = () => {
    const [securities, setSecurities] = useState([]);
    const [books, setBooks] = useState([]);
    const [trades, setTrades] = useState([]);
    const [date, setDate] = useState("");
    const [dateFinal, setDateFinal] = useState("");
    const [cardMessage, setCardMessage] = useState(false);
    const [id, setID] = useState(0);
    const [couponPercent, setCouponPercent] = useState();
    const [bondCurrency, setBondCurrency] = useState("");
    const [cusip, setCusip] = useState();
    const [faceValue, setFaceValue] = useState();
    const [isin, setIsin] = useState();
    const [issuerName, setIssuerName] = useState("");
    const [bondMaturityDate, setBondMaturityDate] = useState();
    const [status, setStatus] = useState("");
    const [type, setType] = useState("");

    const handleRowClickBook = (params) => {
        setID(params.row.id);
        console.log(params.row.id);
    }

    const handleRowClickTrade = (params) => {
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
        console.log('Clicked trade ID: ' + params.row.id);
    }

    useEffect(() => {
        findBook()
              .then(({data}) => {
              setBooks(data);
              });
      }, []);

      useEffect(() => {
        findTrades(id)
              .then(({data}) => {
              setTrades(data);
              });
      }, [id]);

    const columnDef2 = [
      {field: 'id', headerName: 'ID', flex: 1},
      {field: 'tradeType', headerName: 'Type', flex: 1},
      {field: 'tradeCurrency', headerName: 'Currency', flex: 1},
      {field: 'quantity', headerName: 'Quantity', flex: 1},
      {field: 'tradeSettlementDate', headerName: 'Settlement Date', flex: 1},
      {field: 'tradeStatus', headerName: 'Status', flex: 1},
      {field: 'tradeDate', headerName: 'Date', flex: 1},
      {field: 'unitPrice', headerName: 'Unit Price', flex: 1},
      {field: 'counterPartyID', headerName: 'Counter Party ID', flex: 1},
      {field: 'securityID', headerName: 'Security ID', flex: 1},
      {field: 'bookID', headerName: 'Book ID', flex: 1}
    ]

    const rowDef2 = []
    trades.map(trade => 
      rowDef2.push({
            id: trade.id, 
            tradeType: trade.tradeType,
            tradeCurrency: trade.tradeCurrency,
            quantity: trade.quantity,
            tradeSettlementDate: trade.tradeSettlementDate,
            tradeStatus: trade.tradeStatus,
            tradeDate: trade.tradeDate,
            unitPrice: trade.unitPrice,
            counterPartyID: trade.counterPartyID,
            securityID: trade.securityID,
            bookID: trade.bookID
        })
    )

    const columnDef1 = [
        {field: 'bookName', headerName: 'Book', flex: 1}
    ]

    const rowDef1 = []
    books.map(book => 
        rowDef1.push({
            id: book.id,
            bookName: book.bookName
        })
    )

  return (
    <>
        <Box sx={{ height: '100%', width: '100%'}}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <DataGrid
                        rows={rowDef1}
                        columns={columnDef1}
                        sx={{ height: '50%', '.MuiDataGrid-columnHeader': {
                            'background-color': '#dbb669'
                          }, '.MuiDataGrid-row:nth-child(odd)': {
                            'background-color': '#d5d9db'
                          } }}
                        onRowClick={handleRowClickBook}
                        maxColumns={6}
                        />
                    <DataGrid
                        rows={rowDef2}
                        columns={columnDef2}
                        sx={{ height: '50%', '.MuiDataGrid-columnHeader': {
                            'background-color': '#dbb669'
                          }, '.MuiDataGrid-row:nth-child(odd)': {
                            'background-color': '#d5d9db'
                          } }}
                        onRowClick={handleRowClickTrade}
                        maxColumns={6}
                        />
                </div>
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
