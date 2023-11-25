import { useEffect, useState } from "react";
import Link from "next/link";
import { isAuth, getCookie } from "../../actions/auth";
import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ArrowRight from '@mui/icons-material/ArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';


const publicProfileLeftNavBar = ({}) => {
  
  return (
    <nav className="navigation">
      <h4>Navigation</h4>
      <Link href="/category/correct-word">
        <i className="ph-browsers"></i>
        <span>Correct Word</span>
      </Link>

      <Link href="/category/correct-meaning">
        <i className="ph-check-square"></i>
        <span>What it means</span>
      </Link>

      <Link href="/category/synonyms">
        <i className="ph-browsers"></i>
        <span>Synonyms</span>
      </Link>
    </nav>


    
  );

};

export default publicProfileLeftNavBar;
