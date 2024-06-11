import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Button from '@/components/Button';
import Container from '@/components/Container';
import ShortLinkList from '@/components/ShortLinkList';
import dbConnect from '@/db/dbConnect';
import ShortLink from '@/db/models/ShortLink';
import axios from '@/lib/axios';
import { useState } from 'react';

export async function getServerSideProps() {
  await dbConnect();
  const shortLinks = await ShortLink.find();
  return {
    props: {
      shortLinks: JSON.parse(JSON.stringify(shortLinks)),
    },
  };
}

export default function ShortLinkListPage({ shortLinks: initialShortLinks }) {
  const [shortLinks, setShortLinks] = useState(initialShortLinks);
  async function handleDelete(id) {
    axios.delete(`/short-links/${id}`);
    setShortLinks((prevShortLinks) => prevShortLinks.filter((shortLink) => shortLink._id !== id));
  }
  return (
    <>
      <Head>
        <title>주소 줄이기 - Shortit</title>
      </Head>
      <Container page>
        <PageHeader>
          <TitleText>주소 줄이기</TitleText>
          <Button as={Link} href="/short-links/new">
            새로 만들기
          </Button>
        </PageHeader>
        <ShortLinkList items={shortLinks} onDelete={handleDelete} />
      </Container>
    </>
  );
}

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;

export const TitleText = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 35px;
`;
