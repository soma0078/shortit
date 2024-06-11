import Head from 'next/head';
import Link from 'next/link';
import Button from '@/components/Button';
import Container from '@/components/Container';
import QRCodeList from '@/components/QRCodeList';
import { PageHeader, TitleText } from '@/pages/short-links/index';
import dbConnect from '@/db/dbConnect';
import QRCode from '@/db/models/QRCode';
import axios from '@/lib/axios';
import { useState } from 'react';

export async function getServerSideProps() {
  await dbConnect();
  const qrCodes = await QRCode.find();
  return {
    props: {
      qrCodes: JSON.parse(JSON.stringify(qrCodes)),
    },
  };
}

export default function QrCodeListPage({ qrCodes: initialQrCodes }) {
  const [qrCodes, setQrcodes] = useState(initialQrCodes);
  async function handleDelete(id) {
    axios.delete(`qrcodes/${id}`);
    setQrcodes((prevQRCodes) => prevQRCodes.filter((qrcode) => qrcode._id !== id));
  }

  return (
    <>
      <Head>
        <title>QRCode 만들기 - Shortit</title>
      </Head>
      <Container page>
        <PageHeader>
          <TitleText>QR코드 페이지</TitleText>
          <Button as={Link} href="/qrcodes/new">
            새로 만들기
          </Button>
        </PageHeader>
        <QRCodeList items={qrCodes} onDelete={handleDelete} />
      </Container>
    </>
  );
}
