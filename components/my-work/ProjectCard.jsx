import React, { useEffect } from 'react';
import {
  Flex,
  Image,
  Button,
  Heading,
  Link,
  Grid,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Tag,
  Tooltip,
} from '@chakra-ui/react';
import { GithubFill, LinkOut } from 'akar-icons';

const ProjectCard = ({ img, title, github, liveSite, desc, stack }) => {
  return (
    <div className='flex flex-col overflow-hidden bg-charcoal-200 rounded-lg group'>
      <div className='overflow-hidden'>
        <img
          src={img}
          alt={title}
          className='rounded-t-lg group-hover:scale-105 transition duration-200 ease-in-out'
        />
      </div>
      <div className='flex flex-col p-6 items-start gap-4'>
        <h2 className='font-body capitalize text-2xl font-semibold'>{title}</h2>
        <button className='font-body p-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded w-1/2'>
          View
        </button>
        <div className='flex gap-2 items-center'>
          <a href={github}>
            <GithubFill size={20} />
          </a>
          <a href={liveSite}>
            <LinkOut size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

{
  /* <Grid templateColumns='repeat(2, 1fr)' p='4' rounded='xl' bg='charcoal.200'>
<Image src={img} alt={title} rounded='xl' />
<Flex direction='column' gap='4' justifyContent='center' px='12'>
  <Heading size='xl'>{title}</Heading>
  <Button onClick={onOpen}>View</Button>
  <Flex alignItems='center' gap='2'>
    <Tooltip label='Source Code'>
      <Link href={github}>
        <GithubFill />
      </Link>
    </Tooltip>
    <Tooltip label='Live Site'>
      <Link href={liveSite}>
        <LinkOut />
      </Link>
    </Tooltip>
  </Flex>
</Flex>
<Modal isOpen={isOpen} onClose={onClose} isCentered size='3xl'>
  <ModalOverlay backdropFilter='blur(10px)' />
  <ModalContent bg='charcoal.200'>
    <ModalHeader>
      <Heading size='xl'>{title}</Heading>
    </ModalHeader>
    <ModalCloseButton />
    <ModalBody py='6'>
      <Flex direction='column' gap='4'>
        <Image src={imgLg} alt='' rounded='lg' />
        <Flex gap='2'>
          {stack.map((item) => (
            <Tag key='item'>{item}</Tag>
          ))}
        </Flex>
        <Text>{desc}</Text>
        <Flex gap='2' justifyContent='space-between'>
          <Button leftIcon={<GithubFill />} w='full'>
            GitHub
          </Button>
          <Button leftIcon={<LinkOut />} w='full'>
            View Live
          </Button>
        </Flex>
      </Flex>
    </ModalBody>
  </ModalContent>
</Modal>
</Grid> */
}
