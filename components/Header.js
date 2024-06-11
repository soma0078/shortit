import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import logoImage from '@/public/logo.svg';
import Container from './Container';

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Link href="/">
            <Image src={logoImage} alt="Shortit logo" width={93} height={26} />
          </Link>
          <NavMenuWrapper>
            <Link href="/short-links">주소 줄이기</Link>
            <Link href="/qrcodes">QR코드</Link>
          </NavMenuWrapper>
        </Nav>
      </Container>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #fff;
  padding: 24px;
  position: sticky;
  top: 0;
  flex-shrink: 0;
  z-index: 1;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavMenuWrapper = styled.div`
  display: flex;
  gap: 50px;
`;
