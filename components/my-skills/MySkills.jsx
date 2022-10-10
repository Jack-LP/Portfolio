import React from 'react';
import { Flex, Heading, Divider, Image, Text } from '@chakra-ui/react';
import CustomContainer from '../CustomContainer';

const icons = [
  {
    src: 'nextdotjs.svg',
    alt: 'NextJS',
  },
  {
    src: 'react.svg',
    alt: 'React',
  },
  {
    src: 'git.svg',
    alt: 'Git',
  },
  {
    src: 'tailwindcss.svg',
    alt: 'Tailwind',
  },
  {
    src: 'chakraui.svg',
    alt: 'Chakra UI',
  },
  {
    src: 'sass.svg',
    alt: 'SCSS',
  },
];

const MySkills = () => {
  return (
    <CustomContainer>
      <Flex direction='column' gap='6' id='mySkills'>
        <Flex direction='column'>
          <Heading size='xl'>My Skills</Heading>
          <Divider
            w='110px'
            border='3px'
            borderColor='teal.500'
            mt='-1'
            zIndex='-1'
          />
        </Flex>
        <Flex bg='charcoal.200' rounded='xl' p='4' justify='center' gap='6'>
          {icons.map((icon) => (
            <Flex key={icon.alt} direction='column' gap='2' alignItems='center'>
              <Image
                src={`/img/icons/${icon.src}`}
                alt={icon.alt}
                w='16'
                h='16'
                filter='invert(1)'
              />
              <Text>{icon.alt}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </CustomContainer>
  );
};

export default MySkills;
