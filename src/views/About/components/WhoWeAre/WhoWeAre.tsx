/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const WhoWeAre = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid item container alignItems={'center'} justifyContent="center" xs={12} md={12}>
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Kim jesteśmy?
            </Typography>
            <Typography component={'p'} color={'text.secondary'}>
              Z siedzibą w Poznaniu, jesteśmy zespołem najlepszych w Europie doświadczonych specjalistów – inżynierów,
              modelarzy, ditejlerów. Kompleksowe usługi w projektowaniu konstrukcji budowlanych świadczymy przy użyciu
              technologii BIM. Dostarczamy pełne obliczenia i informacje potrzebne do dokładnego opisu projektu w
              przygotowaniu do produkcji. W nieustannym dążeniu do usprawniania i upraszczania procesu projektowego i
              wykonawczego wykorzystujemy zaawansowane programy oraz ich twórców: Tekla Structures, Tekla Tedds,
              Autodesk Revit, Fusion. <br /> Specjalizujemy się w dokumentacji warsztatowej i wykonawczej konstrukcji
              stalowych oraz żelbetowych prefabrykowanych i monolitycznych. <br /> <br /> Innowacyjne myślenie i
              elastyczne działanie pokierowało nas do bliskiej współpracy z liderami przemysłu budowlanego w Polsce, UK
              i Norwegii.
              <br /> <br /> Zapraszamy do wspólnego doświadczania innowacyjnej, wysoko aspirującej i zaawansowanej
              inżynierii budowlanej. Oferujemy naszym klientom atrakcyjne usługi w zakresie wszelkiego rodzaju
              budownictwa przemysłowego, usługowego oraz mieszkaniowego. Nasza oferta obejmuje takie usługi jak:
              <br />
              <br />
            </Typography>
            <Typography component={'p'} color={'text.secondary'}>
              - projekty budowlane <br />
              - projekty wykonawcze i dokumentacja projektowa <br />
              - obliczenia statyczne i raportowanie <br />
              - projekty pełnobranżowe <br />
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
