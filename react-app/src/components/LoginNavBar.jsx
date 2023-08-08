import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { Theme, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import companyLogo from '../assets/logo.png';

const pages = ['Home', 'Books', 'Upcoming', 'Redeemed'];

const LoginNavBar = (props) => {

    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
        props.setTab(newValue);
        console.log(newValue);
    };

    const TabPanel = ({value, index}) => {
        console.log();
    }
    const theme = createTheme({
        palette: {
          secondary: {
            main: '#000000'
          }
        }
      });

  return (
    <>
    <ThemeProvider theme={theme}>
    <AppBar position="static"  sx={{ 'background-color': '#f5dba4'}}>
        <Container maxWidth="xl">
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <div style={{fontSize: '30px',color:'#B97A57',fontFamily:'papyrus'}}>Arrakis</div>
              <img width='100px' height = 'auto' src = {companyLogo}/>
            </Box>
        </Container>
    </AppBar>
  
    </ThemeProvider>
     </>
   );
}
export default LoginNavBar;