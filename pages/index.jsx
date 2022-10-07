import Head from 'next/head';
import CustomContainer from '../components/CustomContainer';
import Navbar from '../components/common/Navbar';
import Hero from '../components/Hero';
import HeadingText from '../components/HeadingText';

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
      <Navbar />
      <Hero />
    </>
  );
}
1;
