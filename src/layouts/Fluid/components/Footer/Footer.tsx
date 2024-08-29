import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import { LinkedIn, Mail, Phone } from '@mui/icons-material';

const Footer = (): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const { t } = useTranslation('footer');

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box display={'flex'} component="a" href="/" title="theFront" width={150}>
            <Box component={'img'} src={'/assets/logo.png'} height={1} width={1} />
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'} gap={4} marginTop={{ xs: 3, sm: 1 }}>
            <Box>
              <Link
                underline="none"
                component="a"
                href="tel:+48 602 284 498"
                target={'blank'}
                color="primary.main"
                variant={'subtitle2'}
              >
                <Phone />
              </Link>
            </Box>
            <Box>
              <Link
                underline="none"
                component="a"
                href="mailto:info@pplus.com.pl"
                target={'blank'}
                color="primary.main"
                variant={'subtitle2'}
              >
                <Mail />
              </Link>
            </Box>

            <Box>
              <Link
                underline="none"
                component="a"
                href="https://www.linkedin.com/company/projekt-plus/"
                target={'blank'}
                color="primary.main"
                variant={'subtitle2'}
              >
                <LinkedIn />
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography align={'center'} variant={'subtitle2'} color="text.secondary" gutterBottom>
          &copy; {`Projekt Plus. ${new Date().getFullYear()}, Marcode. ${t('footer.allRightsReserved')}`}
        </Typography>
        <Typography align={'center'} variant={'caption'} color="text.secondary" component={'p'}>
          {t('footer.cookiesInfo')}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
