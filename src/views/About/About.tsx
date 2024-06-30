import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Contact, Gallery, Hero, Partners, Story, Team, WhoWeAre, Application } from './components';
import { Fluid } from '@/src/layouts';
import Stats from '@/src/views/About/components/Stats';

const About = (): JSX.Element => {
  return (
    <Fluid transparentHeader colorInvert>
      <Hero />
      <Container>
        <Story />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Stats />
        </Container>
      </Box>
      <Container>
        <Gallery />
      </Container>
      <Container paddingTop={'0 !important'}>
        <WhoWeAre />
      </Container>
      {/*<Container maxWidth={800} paddingY={'0 !important'}>*/}
      <Divider />
      {/*</Container>*/}
      {/*<Container>*/}
      {/*  <Team />*/}
      {/*</Container>*/}
      {/*<Box bgcolor={'alternate.main'}>*/}
      {/*  <Container>*/}
      {/*    <Partners />*/}
      {/*  </Container>*/}
      {/*</Box>*/}
      <Contact />

      {/*<Container maxWidth={800} paddingTop={'0 !important'}>*/}
      {/*  <Application />*/}
      {/*</Container>*/}
    </Fluid>
  );
};

export default About;
