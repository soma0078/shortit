import Head from 'next/head';
import { useRouter } from 'next/router';
import axios from '@/lib/axios';
import Container from '@/components/Container';
import ShortLinkForm from '@/components/ShortLinkForm';
import { PageHeader, TitleText } from './index';

export default function ShortLinkCreatePage() {
  const router = useRouter();

  async function handleSubmit(values) {
    await axios.post('/short-links/', values);
    router.push('/short-links/');
  }

  return (
    <>
      <Head>
        <title>새 URL 추가 - Shortit</title>
      </Head>
      <Container page>
        <PageHeader>
          <TitleText>새 URL 추가</TitleText>
        </PageHeader>
        <ShortLinkForm onSubmit={handleSubmit} />
      </Container>
    </>
  );
}
