/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

const Story = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Projekt+
            </Typography>
            <Typography component={'p'}>
              to zgrany zespół młodych a doświadczonych specjalistów.
              <br />
              Naszą specjalizacją jest projektowanie i produkcja obiektów inżynierskich najwyższej jakości.
              <br />
              Dbamy o szczegóły i myślimy globalnie, dlatego projektujemy odważnie.
            </Typography>
          </Box>
        </Grid>
        <Grid item container justifyContent="center" alignItems="center" xs={12} md={6}>
          <Box position={'relative'} maxWidth={900} width={'100vh'} maxHeight={400} height={'100vh'}>
            <Image quality={90} objectFit={'cover'} fill={true} priority alt={''} src={'/assets/team-1.jpg'} />
            {/*TODO: optimize images*/}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Story;
