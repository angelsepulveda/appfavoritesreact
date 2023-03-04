import FavoriteIcon from '@mui/icons-material/Favorite'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

import { CustomDialog } from '@/components'
import { dialogOpenSubject$ } from '@/components/CustomDialog/CustomDialog'
import { FavoriteTable } from '@/components/Navbar/FavoriteTable'

const Navbar: React.FC<{}> = () => {
  const handleClick = (): void => {
    dialogOpenSubject$.setSubject = true
  }

  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            App Favorites
          </Typography>
          <IconButton
            color="secondary"
            aria-label="favorites"
            component="label"
            onClick={handleClick}
          >
            <FavoriteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
