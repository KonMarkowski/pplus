import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Fluid from 'layouts/Fluid';
import { Hero } from './components';
import { useTranslation } from 'next-i18next';

const MainView = (): JSX.Element => {
  const theme = useTheme();
  const { t } = useTranslation('home');
  console.log('km hero.heading.firstPart', t('hero.heading.firstPart'));
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Fluid bgcolor={'background.paper'}>
        <Hero />
      </Fluid>
    </Box>
  );
};

export default MainView;
