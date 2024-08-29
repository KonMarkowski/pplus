import React from 'react';
import { languages } from '@/src/lib/constants/languages';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const LanguageChanger = () => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', columnGap: 2, justifyContent: 'flex-end' }}>
      {Object.entries(languages).map(([lang, properties]) => (
        <Link key={lang} legacyBehavior passHref={true} href={asPath} as={asPath} locale={lang}>
          <Button size={'large'}>{properties.flag}</Button>
        </Link>
      ))}
    </Box>
  );
};
