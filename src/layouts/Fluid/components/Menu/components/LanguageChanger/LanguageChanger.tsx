import { languages } from '@/src/lib/constants/languages';
import { usePathname, useRouter } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const LanguageChanger = () => {
  const router = useRouter();
  const pathname = usePathname();
  const handleSelectLanguage = (newLocale) => {
    const correctedPathName = pathname?.includes('/en') ? pathname.split('/en').pop() : pathname;
    router.push(`/${newLocale}${correctedPathName}`);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
      {Object.entries(languages).map(([lang, properties]) => (
        <Button size={'large'} onClick={() => handleSelectLanguage(lang)}>
          {properties.flag}
        </Button>
      ))}
    </Box>
  );
};
