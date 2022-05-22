import React, { useCallback } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { UserMenu } from '../UserMenu';
// import { Box } from '@mui/material';

export const TopBar = () => {
  const handleMenuClick = useCallback(() => {
    console.log('click menu');
  }, []);

  const handleLoginClick = useCallback(() => {
    console.log('click login');
  }, []);

  const user = null;

  return (
    // <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          onClick={handleMenuClick}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Tutorial shop
        </Typography>
        {user ? (
          <UserMenu />
        ) : (
          <Button color="inherit" onClick={handleLoginClick}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
    // </Box>
  );
};
