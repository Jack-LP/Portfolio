import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    gray: {
      800: '#252525',
    },
    charcoal: {
      100: '#252525',
      200: '#202020',
      300: '#25252550',
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
});

export default theme;
