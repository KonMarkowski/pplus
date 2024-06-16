import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';

import Container from 'components/Container';
import { Fade } from '@mui/material';
import { useTranslation } from 'next-i18next';

const NAVBAR_HEIGHT_DESKTOP = 152;
const NAVBAR_HEIGHT_MOBILE = 83;

const Hero = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const { t } = useTranslation('home');

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${alpha(theme.palette.background.paper, 0)}, ${alpha(
          theme.palette.alternate.main,
          1,
        )} 100%)`,
        backgroundRepeat: 'repeat-x',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          minHeight: '100vh',
        }}
        paddingY={{ xs: 0, sm: '4rem', md: '8rem' }}
        alignContent={'center'}
      >
        <Fade in timeout={1000}>
          <div>
            <Container>
              <Box textAlign={'center'}>
                <Typography
                  variant="h2"
                  color="text.primary"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  {t('hero.heading.firstPart')}
                  <br />
                  {t('hero.heading.secondPart')}
                  <Typography
                    color={'primary'}
                    component={'span'}
                    variant={'inherit'}
                    sx={{
                      background: `linear-gradient(180deg, transparent 82%, ${alpha(
                        theme.palette.secondary.main,
                        0.3,
                      )} 0%)`,
                    }}
                  >
                    {t('hero.heading.thirdPart')}
                  </Typography>{' '}
                  +
                </Typography>
              </Box>
            </Container>
          </div>
        </Fade>
      </Box>
    </Box>
  );
};

export default Hero;
