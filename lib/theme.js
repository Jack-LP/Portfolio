import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

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
    global: (props) => ({
      body: {
        bg: mode('gray.100', 'charcoal.100')(props),
      },
    }),
  },
});

export default theme;
