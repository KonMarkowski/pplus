import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import NoSsr from '@mui/material/NoSsr';

import Container from 'components/Container';

import { Footer, Sidebar } from './components';
import { Squash as Hamburger } from 'hamburger-react';
import pages from 'layouts/navigation-pplus';
import Menu from 'layouts/Fluid/components/Menu';

interface Props {
  children: React.ReactNode;
  colorInvert?: boolean;
  bgcolor?: string;
}

const Fluid = ({ children, colorInvert = false, bgcolor = 'alternate.main' }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarClose = (): void => {
    setOpenSidebar(false);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const scrollTo = (id: string): void => {
    setTimeout(() => {
      const element: HTMLElement = document.querySelector(`#${id}`)!;
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
  };

  const handleToggle = (toggled: boolean) => {
    setOpenSidebar(toggled);
  };

  return (
    <Box id="js--fluid-top">
      <AppBar
        position={'relative'}
        sx={{
          top: 0,
          backgroundColor: bgcolor,
          zIndex: 2,
        }}
        elevation={0}
      >
        <Box paddingY={{ xs: 2, md: 5 }} paddingX={{ xs: 2, md: 10 }}>
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={1}>
            <Box display={'flex'} component="a" href="/" title="theFront" width={{ xs: 200, md: 300 }}>
              <Box component={'img'} src={'/assets/logo.png'} height={1} width={1} />
            </Box>
            <Menu />
          </Box>
        </Box>
      </AppBar>
      <Sidebar onClose={handleSidebarClose} open={openSidebar} variant="temporary" pages={pages} />
      <main>
        {children}
        <Divider />
      </main>
      <Container paddingY={4}>
        <Footer />
      </Container>
      <NoSsr>
        <Zoom in={trigger}>
          <Box
            onClick={() => scrollTo('js--fluid-top')}
            role="presentation"
            sx={{ position: 'fixed', bottom: 24, right: 32 }}
          >
            <Fab color="primary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </Box>
        </Zoom>
      </NoSsr>
    </Box>
  );
};

export default Fluid;
