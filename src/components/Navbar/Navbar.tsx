import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar: React.FC<{}> = () => {
  return <AppBar position="fixed">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        App Favorites
      </Typography>
    </Toolbar>
  </AppBar>
}

export default Navbar
