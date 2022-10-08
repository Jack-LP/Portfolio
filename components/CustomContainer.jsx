import React from 'react';
import { Container } from '@chakra-ui/react';

const CustomContainer = ({ children }) => {
  return (
    <Container maxW='1300px' position='relative' p='0'>
      {children}
    </Container>
  );
};

export default CustomContainer;
