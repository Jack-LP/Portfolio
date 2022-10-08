import React from 'react';
import { Heading, Flex, Divider, Grid } from '@chakra-ui/react';
import CustomContainer from '../CustomContainer';
import ProjectCard from './ProjectCard';

const MyWork = () => {
  return (
    <CustomContainer>
      <Flex direction='column' gap='6'>
        <Flex direction='column'>
          <Heading size='xl'>My Work</Heading>
          <Divider
            w='110px'
            border='3px'
            borderColor='teal.500'
            mt='-1'
            zIndex='-1'
          />
        </Flex>
        <Grid templateColumns='repeat(2, 1fr)' gap='4'>
          <ProjectCard
            img={'img/mintab.jpg'}
            imgLg={'img/mintab-lg.jpg'}
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
          />
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
          />
        </Grid>
        {/* 
        <ProjectCard
          img={'img/mintab.jpg'}
          title={'mintab'}
          links={[
            'https://github.com/Jack-LP/mintab',
            'https://github.com/Jack-LP/mintab',
          ]}
          flipped
        /> */}
      </Flex>
    </CustomContainer>
  );
};

export default MyWork;
