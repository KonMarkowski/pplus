import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { MenuItems } from './components';
import { useTheme } from '@mui/material/styles';
import pages from 'layouts/navigation-pplus';
import { Squash as Hamburger } from 'hamburger-react';

interface Props {
  colorInvert?: boolean;
}

const Menu = ({ colorInvert }: Props): JSX.Element => {
  const theme = useTheme();
  const [openSidebar, setOpenSidebar] = useState(false);
  const [menuShown, setMenuShown] = useState(false);
  const handleToggle = (toggled: boolean) => {
    setOpenSidebar(toggled);
  };
  return (
    <Box sx={{ position: 'relative' }}>
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
        <MenuItems pages={pages} show={openSidebar} colorInvert={colorInvert} />
      </Box>
    </Box>
  );
};

export default Menu;
