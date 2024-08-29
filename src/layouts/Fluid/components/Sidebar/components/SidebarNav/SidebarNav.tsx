import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';

import Grid from '@mui/material/Grid';

interface Props {
  pages: Array<PageItem>;
}

const SidebarNav = ({ pages }: Props): JSX.Element => {
  const theme = useTheme();

  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  return (
    <Box>
      <Box width={1}></Box>
      <Box>
        {pages.map((p, i) => (
          <Grid item key={i} xs={12}>
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
                color:
                  activeLink === p.href
                    ? theme.palette.primary.main
                    : theme.palette.text.primary,

                fontWeight: activeLink === p.href ? 600 : 400,
              }}
            >
              {p.title}
            </Button>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default SidebarNav;
