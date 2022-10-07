import Head from 'next/head';
import Navbar from '../components/common/Navbar';
import Hero from '../components/Hero';

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
