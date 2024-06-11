import Head from 'next/head';
import { Noto_Sans_KR } from 'next/font/google';
import Header from '@/components/Header';
import Container from '@/components/Container';
import GlobalStyle from '@/styles/GlobalStyle';

const notoSansKR = Noto_Sans_KR({
  weight: ['400', '500'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Shortit</title>
      </Head>
      <Header />
      <Container className={`${notoSansKR.className}`}>
        <main>
          <Component {...pageProps} />
        </main>
      </Container>
    </>
  );
}
