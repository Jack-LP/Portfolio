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

const ProjectCard = ({ img, imgLg, title, github, liveSite, desc, stack }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Grid templateColumns='repeat(2, 1fr)' p='4' rounded='xl' bg='charcoal.200'>
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
    </Grid>
  );
};

export default ProjectCard;
