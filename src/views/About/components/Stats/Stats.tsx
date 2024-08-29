/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Stats = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant={'h2'} gutterBottom sx={{ fontWeight: 700 }}>
            14+ lat
          </Typography>
          <Typography variant={'h2'} gutterBottom sx={{ fontWeight: 700 }}>
            8 Inżynierów
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant={'h2'} gutterBottom sx={{ fontWeight: 700 }}>
            60+ BIM Detailerów
          </Typography>
          <Typography variant={'h2'} gutterBottom sx={{ fontWeight: 700 }}>
            100+ Projektów
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} mt={4} sx={{ textAlign: 'center' }}>
          <Typography variant={'h3'} gutterBottom sx={{ fontWeight: 700 }}>
            + "Sky is the limit" - tylko dla budynków +
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Stats;
