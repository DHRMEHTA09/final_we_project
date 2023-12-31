import * as React from 'react';

import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';

import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Footer() {
  
  return (
    
    <Sheet
      variant="primary"
      sx={{backgroundColor:"#42a5f5"}}
     
     
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        
        <IconButton variant="plain">
          <FacebookRoundedIcon />
        </IconButton>
        <IconButton variant="plain">
          <GitHubIcon />
        </IconButton>
        <IconButton variant="plain">
          <InstagramIcon />
        </IconButton>
        <IconButton variant="plain">
          <LinkedInIcon />
        </IconButton>
        <Input
          variant="soft"
          placeholder="Type in your email"
          type="email"
          name="email"
          endDecorator={
            <IconButton variant="soft" aria-label="subscribe">
              <SendIcon />
            </IconButton>
          }
          sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' },margin:"10px" }}
        />
      </Box>
      
      
    </Sheet>
  );
}