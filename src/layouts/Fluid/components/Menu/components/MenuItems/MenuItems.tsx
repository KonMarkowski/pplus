import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import { Slide } from '@mui/material';
import { languages } from '@/src/lib/constants/languages';
import { LanguageChanger } from '@/src/layouts/Fluid/components/Menu/components/LanguageChanger/LanguageChanger';
import { useTranslation } from 'react-i18next';

interface Props {
  pages: Array<PageItem>;
  show: boolean;
}

const MenuItems = ({ pages, show }: Props): JSX.Element => {
  const theme = useTheme();
  const { t } = useTranslation('common');

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
                {t(p.translationKey)}
              </Button>
            </Grid>
          </Slide>
        ))}
        <Slide in={show} direction={'left'} timeout={(pages.length + 1) * 200}>
          <Grid item xs={12}>
            <LanguageChanger />
          </Grid>
        </Slide>
      </Box>
    </Box>
  );
};

export default MenuItems;
