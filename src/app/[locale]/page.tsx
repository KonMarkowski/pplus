'use client'; // This is a client component 👈🏽

import React from 'react';
import TranslationsProvider from '@/src/components/TranslationsProvider';
import initTranslations from '@/app/i18n';
import MainView from '@/src/views/MainView';

const i18nNamespaces = ['home'];
const IndexPage = async ({ params: { locale } }): Promise<JSX.Element> => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  console.log(locale);
  console.log(t('hero.heading.firstPart'));
  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      <MainView />
    </TranslationsProvider>
  );
};

export default IndexPage;
