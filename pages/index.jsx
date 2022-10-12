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
      <div className='container mx-auto flex flex-col gap-72 my-64'>
        <MySkills />
        <MyWork />
        <AboutMe />
        <Contact />
      </div>
    </>
  );
}
