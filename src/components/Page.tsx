import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import getTheme from 'theme';
import AOS from 'aos';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export const useDarkMode = (): [string, () => void, boolean] => {
  const [themeMode, setTheme] = useState('light');
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode: string) => {
    try {
      window.localStorage.setItem('themeMode', mode);
    } catch {
      /* do nothing */
    }

    setTheme(mode);
  };

  const themeToggler = (): void => {
    themeMode === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    try {
      const localTheme = window.localStorage.getItem('themeMode');
      localTheme ? setTheme(localTheme) : setMode('light');
    } catch {
      setMode('light');
    }

    setMountedComponent(true);
  }, []);

  return [themeMode, themeToggler, mountedComponent];
};

interface Props {
  children: React.ReactNode;
}

export default function Page({ children }: Props): JSX.Element {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  const [themeMode, themeToggler, mountedComponent] = useDarkMode();

  useEffect(() => {
    AOS.refresh();
  }, [mountedComponent, themeMode]);

  const { asPath, locale } = useRouter();
  const { t } = useTranslation('header');
  return (
    <>
      <Head>
        <title>{t('header.title')}</title>
        <meta key="title" property="og:title" content={t('header.title')} />
        <meta key={'main_description'} name="description" content={t('header.description')} />
        <meta key={'description'} property="og:description" content={t('header.description')} />
        <meta key={'keywords'} property="og:keywords" content={t('header.keywords')} />
        <meta property="og:locale" content={t('header.contentLang')} />
        <meta property="og:type" content="website" />
        <meta key={'image'} property="og:image" content="/assets/logo.png" />
        <meta key={'url`'} property="og:url" content={`${process.env.NEXT_PUBLIC_APP_URL}/${locale}${asPath}`} />
      </Head>
      <ThemeProvider theme={getTheme(themeMode, themeToggler)}>
        <CssBaseline />
        <Paper sx={{ overflowX: 'hidden' }} elevation={0}>
          {children}
        </Paper>
      </ThemeProvider>
    </>
  );
}
