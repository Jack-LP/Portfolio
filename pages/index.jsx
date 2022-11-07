import Head from 'next/head';
import Hero from '../components/hero/Hero';
import MyWork from '../components/my-work/MyWork';
import Contact from '../components/contact/Contact';
import About from '../components/about/About';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jack Paget | Portfolio</title>
        <meta
          name='description'
          content="Jack Paget's web development portfolio"
        />
        <link rel='icon' href='/favicon-jp.svg?v=2' />
      </Head>
      <Hero />
      <div className='container mx-auto flex flex-col gap-72 mt-64'>
        <About />
        <MyWork />
        <Contact />
      </div>
    </>
  );
}
