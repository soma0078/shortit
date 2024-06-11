import Head from 'next/head';
import { useRouter } from 'next/router';
import axios from '@/lib/axios';
import Container from '@/components/Container';
import QRCodeForm from '@/components/QRCodeForm';
import { PageHeader, TitleText } from '@/pages/short-links/index';

export default function QRCodeCreatePage() {
  const router = useRouter();

  async function handleSubmit(values) {
    await axios.post('/qrcodes/', values);
    router.push('/qrcodes/');
  }

  return (
    <>
      <Head>
        <title>새 QRCode 추가 - Shortit</title>
      </Head>
      <Container page>
        <PageHeader>
          <TitleText>새 QRCode 추가</TitleText>
        </PageHeader>
        <QRCodeForm onSubmit={handleSubmit} />
      </Container>
    </>
  );
}
