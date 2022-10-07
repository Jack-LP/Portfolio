import React from 'react';
import { Container } from '@chakra-ui/react';

const CustomContainer = ({ children, pt }) => {
  return (
    <Container maxW='1200px' pt={pt}>
      {children}
    </Container>
  );
};

export default CustomContainer;
