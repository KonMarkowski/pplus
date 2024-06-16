import React from 'react';
import MainView from '@/src/views/MainView';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Agency } from '@/src/views';
import { alwaysLoadedNs } from '@/src/constants/alwaysLoadedNs';

const IndexPage = (): JSX.Element => {
  return <Agency />;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [...alwaysLoadedNs, 'projects'])),
    },
  };
}

export default IndexPage;
