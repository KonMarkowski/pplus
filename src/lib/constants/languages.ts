import i18nConfig from '@/i18nConfig';

type LanguageOption = {
  label: string;
  prefix: string;
  flag: string;
};

export type AvailableLocales = 'pl' | 'en';

export const languages: Record<AvailableLocales, LanguageOption> = {
  pl: {
    label: 'Polski',
    prefix: 'pl',
    flag: '🇵🇱',
  },
  en: {
    label: 'English', //TODO: change to translation key
    prefix: 'en',
    flag: '🇬🇧',
  },
};
