/* eslint-disable react/no-unescaped-entities */
import React, { useMemo } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';
import { useTranslation } from 'next-i18next';

const phoneRegex = /^\d{0,9}$/;

const Contact = (): JSX.Element => {
  const theme = useTheme();
  const { t } = useTranslation('contact');

  const validationSchema = useMemo(
    () =>
      yup.object().shape(
        {
          email: yup
            .string()
            .email(t('form.validation.email.message1'))
            .when('phone', {
              // @ts-ignore
              is: (phone) => !phone || phone.length === 0,
              then: yup.string().email().required(t('form.validation.message')),
              otherwise: yup.string(),
            }),
          phone: yup
            .string()
            .matches(phoneRegex, t('form.validation.phone.message1'))
            .min(9, t('form.validation.phone.message2'))
            .when('email', {
              // @ts-ignore
              is: (email) => !email || email.length === 0,
              then: yup.string().required(t('form.validation.message')),
              otherwise: yup.string(),
            }),
        },
        [['email', 'phone']],
      ),
    [],
  );

  const LeftSide = (): JSX.Element => {
    const initialValues = {
      phone: '',
      email: '',
      message: '',
    };

    const onSubmit = (values) => {
      return values;
    };

    const formik = useFormik({
      initialValues,
      validationSchema: validationSchema,
      onSubmit,
    });

    return (
      <Box>
        <Box marginBottom={4}>
          <Typography variant={'h3'} sx={{ fontWeight: 700 }} gutterBottom>
            {t('contact.contactUs')}
          </Typography>
          <Typography color="text.secondary">
            Rather than worrying about switching offices every couple years, you can instead stay in the same location
            and grow-up from your shared coworking space to an office that takes up an entire floor.
          </Typography>
        </Box>
        <Box>
          <form noValidate onSubmit={formik.handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label={t('form.input.email.desc')}
                  variant="outlined"
                  name={'email'}
                  fullWidth
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label={t('form.input.phone.desc')}
                  variant="outlined"
                  name={'phone'}
                  fullWidth
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  multiline
                  rows={6}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="message"
                  fullWidth
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  error={formik.touched.message && Boolean(formik.errors.message)}
                  // @ts-ignore
                  helperText={formik.touched.message && formik.errors.message}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  sx={{ height: 54, minWidth: 150 }}
                  variant="contained"
                  color="primary"
                  size="medium"
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography color="text.secondary">We'll get back to you in 1-2 business days.</Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <Typography component="p" variant="body2" align="left">
                    By clicking on "submit" you agree to our{' '}
                    <Box component="a" href="" color={theme.palette.text.primary} fontWeight={'700'}>
                      Privacy Policy
                    </Box>
                    ,{' '}
                    <Box component="a" href="" color={theme.palette.text.primary} fontWeight={'700'}>
                      Data Policy
                    </Box>{' '}
                    and{' '}
                    <Box component="a" href="" color={theme.palette.text.primary} fontWeight={'700'}>
                      Cookie Policy
                    </Box>
                    .
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    );
  };

  const RightSide = (): JSX.Element => {
    return (
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.614293976996!2d16.938449398203375!3d52.37741349989089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045afba6548077%3A0xe9731470011d3777!2sRomana%20Maya%201%2C%2061-371%20Pozna%C5%84!5e0!3m2!1sen!2spl!4v1718545379672!5m2!1sen!2spl"
        style={{
          minHeight: 300,
          filter: theme.palette.mode === 'dark' ? 'grayscale(0.5) opacity(0.7)' : 'none',
        }}
      />
    );
  };

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} position={'relative'}>
          <Box display={'flex'} alignItems={'center'} width={1} order={{ xs: 2, md: 1 }}>
            <Container>
              <LeftSide />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' },
              minHeight: { xs: 300, md: 600 },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: '50vw' },
                height: '100%',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    left: '0%',
                    width: 1,
                    height: 1,
                    position: { xs: 'relative', md: 'absolute' },
                  }}
                >
                  <RightSide />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider />
    </Box>
  );
};

export default Contact;
