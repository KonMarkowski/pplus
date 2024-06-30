import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Gallery = (): JSX.Element => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const photos = [
    {
      src: '/assets/gallery-1.jpg',
      source: '/assets/gallery-1.jpg',
      rows: 2,
      cols: 1,
    },
    {
      src: '/assets/gallery-2.jpg',
      source: '/assets/gallery-2.jpg',
      rows: 1,
      cols: 2,
    },
    {
      src: '/assets/gallery-4.jpg',
      source: '/assets/gallery-4.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: '/assets/gallery-5.jpg',
      source: '/assets/gallery-5.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: '/assets/gallery-3.jpg',
      source: '/assets/gallery-3.jpg',
      rows: 1,
      cols: 2,
    },
  ];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length - 1);

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}
        >
          Mały zespół. Wielkie serca.
        </Typography>
        <Typography variant="h6" align={'center'} color={'text.secondary'}>
          Zawsze koncentrujemy się na znalezieniu najlepszych ludzi do współpracy.
        </Typography>
      </Box>
      <Box>
        <ImageList variant="quilted" cols={4} rowHeight={isMd ? 300 : 220} gap={isMd ? 16 : 8}>
          {photosToShow.map((item, i) => (
            <ImageListItem key={i} cols={isMd ? item.cols || 1 : 2} rows={isMd ? item.rows || 1 : 1}>
              <img
                height={'100%'}
                width={'100%'}
                src={item.src}
                alt="..."
                loading="lazy"
                style={{
                  objectFit: 'cover',
                  filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                  cursor: 'poiner',
                  borderRadius: 8,
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default Gallery;
