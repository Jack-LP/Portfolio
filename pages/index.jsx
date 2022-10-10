import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
import Hero from '../components/hero/Hero';
import MyWork from '../components/my-work/MyWork';
import AboutMe from '../components/about-me/AboutMe';
import Contact from '../components/contact/Contact';
import MySkills from '../components/my-skills/MySkills';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta
          name='description'
          content="Jack Paget's web development portfolio"
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <Flex direction='column' gap='100px' my='20'>
        <MyWork />
        <AboutMe />
        <Contact />
        <MySkills />
      </Flex>
    </>
  );
}
