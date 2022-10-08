import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    charcoal: {
      100: '#252525',
      200: '#202020',
    },
    charcoalAlpha: {
      100: '#25252550',
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
  styles: {
    global: {
      body: {
        bg: 'charcoal.100',
      },
    },
  },
});

export default theme;
