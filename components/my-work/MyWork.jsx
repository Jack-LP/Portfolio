import React from 'react';
import { Heading, Flex } from '@chakra-ui/react';
import CustomContainer from '../CustomContainer';
import ProjectCard from './ProjectCard';

const MyWork = () => {
  return (
    <CustomContainer>
      <Flex mt='92vh' direction='column' gap='4' alignItems='start'>
        <Heading>My Work</Heading>
        <Flex></Flex>
        <ProjectCard
          img={'img/mintab.jpg'}
          title={'mintab'}
          links={[
            'https://github.com/Jack-LP/mintab',
            'https://github.com/Jack-LP/mintab',
          ]}
        />
        <ProjectCard
          img={'img/mintab.jpg'}
          title={'mintab'}
          links={[
            'https://github.com/Jack-LP/mintab',
            'https://github.com/Jack-LP/mintab',
          ]}
          flipped
        />
        <ProjectCard
          img={'img/mintab.jpg'}
          title={'mintab'}
          links={[
            'https://github.com/Jack-LP/mintab',
            'https://github.com/Jack-LP/mintab',
          ]}
        />
      </Flex>
    </CustomContainer>
  );
};

export default MyWork;
