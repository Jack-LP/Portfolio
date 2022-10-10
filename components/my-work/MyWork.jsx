import React from 'react';
import projecData from '../../projectData.json';
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
          {projecData.map((item) => (
            <ProjectCard
              key={item.id}
              img={item.img}
              imgLg={item.imgLg}
              title={item.title}
              github={item.github}
              liveSite={item.liveSite}
              desc={item.desc}
              stack={item.stack}
            />
          ))}
        </Grid>
      </Flex>
    </CustomContainer>
  );
};

export default MyWork;
