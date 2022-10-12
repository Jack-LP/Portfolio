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
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
});

export default theme;
