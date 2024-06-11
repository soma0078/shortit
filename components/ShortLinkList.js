import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import Card from './Card';
import Button from './Button';
import formatDate from '@/lib/formatDate';
import linkIcon from '@/public/link.svg';
import replyIcon from '@/public/reply.svg';
import calendarIcon from '@/public/calendar.svg';

function ShortLinkItem({ value, onDelete }) {
  function handleDelete() {
    onDelete(value._id);
  }
  return (
    <Card>
      <StyledCardContent>
        <div>
          <ItemTitle>{value.title}</ItemTitle>
          <ItemDate>
            <Image src={calendarIcon} alt="calendar" />
            {formatDate(value.createdAt)}
          </ItemDate>
        </div>
        <ButtonWrapper>
          <Button variant="outline" as={Link} href={`/short-links/${value._id}`}>
            수정
          </Button>
          <Button variant="minimal" type="button" onClick={handleDelete}>
            삭제
          </Button>
        </ButtonWrapper>
      </StyledCardContent>
      <Card.Footer>
        <LinkWrapper>
          <Image src={linkIcon} alt="link" />
          <Link variant="primary" href={`${value.shortUrl}`} target="_blank">
            {process.env.NEXT_PUBLIC_BASE_URL}/{value.shortUrl}
          </Link>
        </LinkWrapper>
        <LinkWrapper>
          <Image src={replyIcon} alt="reply" />
          <Link variant="secondary" href={value.url} target="_blank">
            {value.url}
          </Link>
        </LinkWrapper>
      </Card.Footer>
    </Card>
  );
}

export default function ShortLinkList({ items = [], onDelete }) {
  return (
    <StyledShortLinkList>
      {items.map((url) => (
        <li key={url._id}>
          <ShortLinkItem value={url} onDelete={() => onDelete(url._id)} />
        </li>
      ))}
    </StyledShortLinkList>
  );
}

const StyledShortLinkList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemTitle = styled.h2`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 29px;
`;

export const ItemDate = styled.span`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: #8a8797;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  &:last-child {
    margin-top: 10px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
