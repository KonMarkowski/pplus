import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { MenuItems } from './components';
import { useTheme } from '@mui/material/styles';
import pages from 'layouts/navigation-pplus';
import { Squash as Hamburger } from 'hamburger-react';
import { Slide } from '@mui/material';

interface Props {
  colorInvert?: boolean;
}

const Menu = ({ colorInvert }: Props): JSX.Element => {
  const theme = useTheme();
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleToggle = (toggled: boolean) => {
    setOpenSidebar(toggled);
  };

  const handleClose = () => {
    setOpenSidebar(false);
  };
  return (
    <>
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Hamburger size={30} color={theme.palette.primary.main} onToggle={handleToggle} toggled={openSidebar} />
        <Box
          sx={{
            position: 'absolute',

            right: 0,
            top: 50,
            display: 'flex',
            alignContent: 'end',
            minWidth: 200,
            justifyContent: 'flex-end',
          }}
        >
          <MenuItems pages={pages} show={openSidebar} handleClose={handleClose} />
        </Box>
      </Box>
      {/*<Slide in={openSidebar} direction={'left'} timeout={200}>*/}
      {/*  <Box*/}
      {/*    sx={{*/}
      {/*      position: 'fixed',*/}
      {/*      right: 0,*/}
      {/*      top: 0,*/}
      {/*      bottom: 0,*/}
      {/*      background: 'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0) 100%)',*/}
      {/*      width: { xs: 150, md: 300 },*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</Slide>*/}
    </>
  );
};

export default Menu;
