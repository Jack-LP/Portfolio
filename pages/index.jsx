import Head from 'next/head';
import Hero from '../components/hero/Hero';
import MyWork from '../components/my-work/MyWork';

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
      <MyWork />
    </>
  );
}
1;
