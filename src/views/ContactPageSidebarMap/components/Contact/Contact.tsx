/* eslint-disable react/no-unescaped-entities */
import React, { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { TFunction, useTranslation } from 'next-i18next';

const getData = (t: TFunction) => [
  {
    label: t('contact:contact.section.phone'),
    value: '+48 602 284 498',
    icon: (
      <svg width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
  },
  {
    label: t('contact:contact.section.email'),
    value: 'info@pplus.com.pl',
    icon: (
      <svg width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
  },
  {
    label: t('contact:contact.section.address'),
    value: t('contact:contact.address'),
    icon: (
      <svg width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const Contact = (): JSX.Element => {
  const theme = useTheme();
  const { t } = useTranslation('contact');

  const data = useMemo(() => getData(t), [t]);

  return (
    <Box>
      <Box marginBottom={2}>
        <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom align={'center'}>
          {t('contact.details')}
        </Typography>
      </Box>
      <Box
        display={'flex'}
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent={'space-between'}
        marginBottom={4}
      >
        {data.map((item, i) => (
          <Box key={i} component={ListItem} disableGutters width={'auto'} padding={2}>
            <Box component={ListItemAvatar} minWidth={'auto !important'} marginRight={2}>
              <Box component={Avatar} bgcolor={theme.palette.primary.main} width={60} height={60}>
                {item.icon}
              </Box>
            </Box>
            <ListItemText primary={item.label} secondary={item.value} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Contact;
