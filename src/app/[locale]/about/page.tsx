'use client';

import React from 'react';
import Agency from 'views/Agency';
import initTranslations from '@/app/i18n';
import Typography from '@mui/material/Typography';
import Fluid from 'layouts/Fluid';

const i18nNamespaces = ['portfolio'];

const AgencyPage = async ({ params: { locale } }): Promise<JSX.Element> => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return <Fluid bgcolor={'background.paper'}>hello</Fluid>;
};

export default AgencyPage;
