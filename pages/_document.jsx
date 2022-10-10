import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html style={{ scrollBehavior: 'smooth' }}>
      <Head>
        <link
          href='https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900&display'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
