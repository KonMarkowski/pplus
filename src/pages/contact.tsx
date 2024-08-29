import React from 'react';
import MainView from '@/src/views/MainView';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Agency } from '@/src/views';
import ContactPageSidebarMap from 'views/ContactPageSidebarMap';
import { alwaysLoadedNs } from '@/src/constants/alwaysLoadedNs';

const IndexPage = (): JSX.Element => {
  return <ContactPageSidebarMap />;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [...alwaysLoadedNs, 'contact'])),
    },
  };
}

export default IndexPage;
