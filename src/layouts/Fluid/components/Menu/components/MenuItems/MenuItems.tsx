import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import { Fade, Grow, Slide } from '@mui/material';

interface Props {
  pages: Array<PageItem>;
  show: boolean;
}

const MenuItems = ({ pages, show }: Props): JSX.Element => {
  const theme = useTheme();

  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  return (
    <Box>
      <Box>
        {pages.map((p, i) => (
          <Slide key={i} in={show} direction={'left'} timeout={(i + 1) * 200}>
            <Grid item xs={12}>
              <Button
                size={'large'}
                component={'a'}
                href={p.href}
                fullWidth
                sx={{
                  fontSize: {
                    xs: 20,
                    md: 30,
                  },
                  justifyContent: 'flex-end',
                  color: activeLink === p.href ? theme.palette.primary.main : theme.palette.text.primary,

                  fontWeight: activeLink === p.href ? 600 : 400,
                }}
              >
                {p.title}
              </Button>
            </Grid>
          </Slide>
        ))}
      </Box>
    </Box>
  );
};

export default MenuItems;
