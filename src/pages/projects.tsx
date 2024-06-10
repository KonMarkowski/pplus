import React from 'react';
import MainView from '@/src/views/MainView';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const IndexPage = (): JSX.Element => {
  return <MainView />;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
}

export default IndexPage;
