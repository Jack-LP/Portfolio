import React from 'react';
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
} from '@chakra-ui/react';
import { GithubFill, LinkOut } from 'akar-icons';

const ProjectCard = ({ img, imgLg, title, links, flipped }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Grid templateColumns='repeat(2, 1fr)' p='4' rounded='xl' bg='charcoal.200'>
      <Image src={img} alt='mintab' rounded='xl' />
      <Flex direction='column' gap='4' justifyContent='center' px='12'>
        <Heading size='2xl'>{title}</Heading>
        <Button onClick={onOpen}>View</Button>
        <Flex alignItems='center' gap='2'>
          <Link href={links[0]}>
            <GithubFill />
          </Link>
          <Link href={links[1]}>
            <LinkOut />
          </Link>
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
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                distinctio necessitatibus beatae quis dignissimos totam
                excepturi dicta, hic consequuntur culpa doloremque cupiditate
                voluptates ipsa dolor? Eaque quaerat harum neque laudantium!
              </Text>
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
