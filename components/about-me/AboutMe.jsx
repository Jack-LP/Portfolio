import React from 'react';
import CustomContainer from '../CustomContainer';
import { Flex, Heading, Divider, Grid, Image, Text } from '@chakra-ui/react';

const AboutMe = () => {
  return (
    <CustomContainer>
      <Flex direction='column' gap='6'>
        <Flex direction='column'>
          <Heading size='xl'>About Me</Heading>
          <Divider
            w='110px'
            border='3px'
            borderColor='teal.500'
            mt='-1'
            zIndex='-1'
          />
        </Flex>
        <Grid templateColumns='1fr 2fr'>
          <Image src='img/jp-logo.svg' alt='JP' w='200px' placeSelf='center' />
          <Text placeSelf='center' lineHeight='6' fontSize='18px'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugiat,
            unde, provident illum vel, eius corporis cumque beatae dignissimos
            accusantium a magni laborum. Aperiam commodi veniam ipsa natus qui!
            Nemo modi nostrum impedit error harum. Sit odit est eveniet qui
            error in a tempore ratione, facilis aliquam, quam quibusdam
            voluptates quas temporibus velit? Voluptate expedita consequuntur
            asperiores quibusdam saepe. Ipsa, numquam aliquid eum cupiditate
            sint illum culpa? Cum molestias adipisci maxime sequi, quibusdam
            beatae, expedita explicabo incidunt sint reprehenderit unde.
            Incidunt quas voluptatibus modi repellendus consequatur. Ex
            provident inventore delectus modi iste earum, ab quidem, nulla ut
            aut, exercitationem vero.
          </Text>
        </Grid>
      </Flex>
    </CustomContainer>
  );
};

export default AboutMe;
