import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import Card from './Card';
import QRCode from './QRCode';
import Button from './Button';
import linkIcon from '@/public/link.svg';
import calendarIcon from '@/public/calendar.svg';
import { ButtonWrapper, ItemDate, ItemTitle, LinkWrapper } from './ShortLinkList';
import formatDate from '@/lib/formatDate';

function QRCodeItem({ value, onDelete }) {
  function handleDelete() {
    onDelete(value._id);
  }

  const { _id: id, title, url, updatedAt } = value;

  return (
    <>
      <Card>
        <QRCode title={title} value={url} />
        <StyledQRCodeItemContent>
          <ItemTitle>{title}</ItemTitle>
          <ItemDate>
            <Image src={calendarIcon} alt="calendar" />
            {formatDate(updatedAt)}
          </ItemDate>
          <LinkWrapper>
            <Image src={linkIcon} alt="link" />
            <Link variant="primary" href={value.url} target="_blank">
              {value.url}
            </Link>
          </LinkWrapper>
        </StyledQRCodeItemContent>
        <ButtonWrapper>
          <Button variant="outline" as={Link} href={`/qrcodes/${id}`}>
            수정
          </Button>
          <Button variant="minimal" onClick={handleDelete}>
            삭제
          </Button>
        </ButtonWrapper>
      </Card>
    </>
  );
}
export default function QRCodeList({ items = [], onDelete }) {
  return (
    <>
      <StyledQRCodeList>
        {items.map((item) => (
          <li key={item._id}>
            <QRCodeItem value={item} onDelete={onDelete} />
          </li>
        ))}
      </StyledQRCodeList>
    </>
  );
}

const StyledQRCodeList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledQRCodeItemContent = styled.div`
  flex-grow: 1;
`;
