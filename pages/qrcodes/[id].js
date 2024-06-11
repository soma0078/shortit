import Head from 'next/head';
import Container from '@/components/Container';
import { TitleText } from '../short-links';
import QRCodeForm, { QRCodeFormType } from '@/components/QRCodeForm';
import dbConnect from '@/db/dbConnect';
import QRCode from '@/db/models/QRCode';
import { useRouter } from 'next/router';
import axios from '@/lib/axios';

export async function getServerSideProps(context) {
  const { id } = context.query;
  await dbConnect();
  const qrCode = await QRCode.findById(id);
  if (!qrCode) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        qrCode: JSON.parse(JSON.stringify(qrCode)),
      },
    };
  }
}

export default function QRCodeEditPage({ qrCode }) {
  const router = useRouter();
  const { id } = router.query;

  async function handleSubmit(values) {
    await axios.patch(`/qrcodes/${id}`, values);
    router.push('/qrcodes');
  }
  return (
    <>
      <Head>
        <title>QRCode 수정하기 - Shortit</title>
      </Head>
      <Container page>
        <TitleText>QRCode 수정하기</TitleText>
        <QRCodeForm type={QRCodeFormType.Edit} initialValues={qrCode} onSubmit={handleSubmit} />
      </Container>
    </>
  );
}
