import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';
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

  const LeftSide = (): JSX.Element => {
    return (
      <Box>
        <Box marginBottom={2}>
          <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
            Skontaktuj się z nami
          </Typography>
        </Box>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
          {getData(t).map((item, i) => (
            <Box key={i} component={ListItem} disableGutters width={'auto'} padding={0}>
              <Box component={ListItemAvatar} minWidth={'auto !important'} marginRight={2}>
                <Box component={Avatar} bgcolor={theme.palette.primary.main} width={40} height={40}>
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
          <Box width={1} order={{ xs: 2, md: 1 }}>
            <Container>
              <LeftSide />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' },
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
    </Box>
  );
};

export default Contact;
