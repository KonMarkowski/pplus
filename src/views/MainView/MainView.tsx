import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Fluid from 'layouts/Fluid';
import { Hero } from './components';

interface Props {}
const MainView = ({}: Props): JSX.Element => {
  const theme = useTheme();
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Fluid bgcolor={'background.paper'}>
        <Hero />
      </Fluid>
    </Box>
  );
};

export default MainView;
