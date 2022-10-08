import React from 'react';
import { Flex, Image, Button, Heading, Link, Grid } from '@chakra-ui/react';
import { GithubFill, LinkOut } from 'akar-icons';

const ProjectCard = ({ img, title, links, flipped }) => {
  return (
    <Grid templateColumns='repeat(2, 1fr)' p='4' rounded='xl' bg='charcoal.200'>
      <Image src={img} alt='mintab' rounded='xl' order={flipped ? '1' : '0'} />
      <Flex direction='column' gap='4' justifyContent='center' px='12'>
        <Heading size='2xl'>{title}</Heading>
        <Button colorScheme='teal'>View</Button>
        <Flex alignItems='center' gap='2'>
          <Link href={links[0]}>
            <GithubFill />
          </Link>
          <Link href={links[1]}>
            <LinkOut />
          </Link>
        </Flex>
      </Flex>
    </Grid>
  );
};

export default ProjectCard;
