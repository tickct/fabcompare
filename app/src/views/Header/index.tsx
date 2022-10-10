import React from 'react';
import './styles.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" component="div">FAB Compare</Typography>
      </Toolbar>
    </AppBar>
  )
}