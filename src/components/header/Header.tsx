'use client'
import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from 'next/link'
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import { alpha, styled } from '@mui/material';

const pages = ['Inicio', 'Nosotros', 'Servicios', 'Contacto'];

const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      backgroundColor: 'rgba(0,0,0,.95)',
      marginTop: theme.spacing(1),
      minWidth: '92%',
      color: theme.palette.grey[300],
      padding: "20px 10px",
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '20px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
            ),
        },
      },
    },
  }));

export function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className='bg-gradient-to-r from-black to-purple-950'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Image src='/img/logo4.png' width={150} height={150} alt="ready logo" className='hidden md:block w-1/3 h-auto'/>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu button"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <StyledMenu
                id="menu-appbar"
                MenuListProps={{
                'aria-labelledby': 'botones-menu-nav',
                }}
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <a href={`/#${page}`} className='py-5 text-start text-3xl backdrop-blur-sm border-b-2 border-slate-400 w-4/5'>{page}</a>
                </MenuItem>
              ))}

            </StyledMenu>
          </Box>
          <Image src='/img/logo4.png' width={100} height={50} alt="ready logo" className='block md:hidden w-2/3 h-10'/>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className='w-2/3 justify-evenly items-center'>
            {pages.map((page) => (
              <Link
                href={`/#${page}`}
                key={page}
                onClick={handleCloseNavMenu}
                className='my-2 text-white block'
              >
                {page}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
