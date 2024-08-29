import React, { useEffect } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Container from 'components/Container';
import useMediaQuery from '@mui/material/useMediaQuery';

const Hero = (): JSX.Element => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });

  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      className={'jarallax'}
      data-jarallax
      data-speed="0.2"
      position={'relative'}
      minHeight={{ xs: 500, sm: 600, md: 700 }}
      display={'flex'}
      alignItems={'center'}
      marginTop={-13}
      paddingTop={13}
      id="agency__portfolio-item--js-scroll"
    >
      {isMd ? (
        <Image
          className={'jarallax-img'}
          fill={true}
          quality={90}
          objectFit={'cover'}
          priority
          alt={''}
          src={'/assets/team-2.jpg'} //TODO: optimize images
          objectPosition={'50% -500px'}
        />
      ) : (
        <Image
          className={'jarallax-img'}
          fill={true}
          quality={90}
          objectFit={'cover'}
          priority
          alt={''}
          src={'/assets/team-2.jpg'} //TODO: optimize images
          objectPosition={'50% -200px'}
        />
      )}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          background: alpha('#161c2d', 0.4),
          zIndex: 1,
        }}
      />
      <Container position={'relative'} zIndex={2}>
        <Box>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 900,
              color: 'common.white',
              textTransform: 'uppercase',
            }}
          >
            O nas
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.primary"
            sx={{
              color: 'common.white',
            }}
          >
            Zespół inżynierów z doświadczeniem w międzynarodowych grupach projektowych
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
