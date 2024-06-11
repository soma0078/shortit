import { useRef, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Button from '@/components/Button';
import Input from '@/components/Input';
import cutUrlImage from '@/public/cut-url.svg';
import copyToClipBoard from '@/lib/copyToClipBoard';
import axios from '@/lib/axios';

const StyledInput = styled(Input)`
  flex-grow: 1;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export default function Home() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const inputRef = useRef();

  function handleChange(e) {
    setUrl(e.target.value);
  }

  async function handleCreate(e) {
    e.preventDefault();
    try {
      const res = await axios.post('/short-links/', { title: url, url });
      const newShortLink = res.data;
      const newShortUrl = newShortLink.shortUrl;
      setShortUrl(newShortUrl);
    } catch (error) {
      console.error('Error creating short URL:', error);
    }
  }

  async function handleCopy(e) {
    e.preventDefault();
    inputRef.current.select();
    const text = inputRef.current.value;
    await copyToClipBoard(text);
    alert('복사했습니다. ctrl + v로 붙여넣으세요.');
  }

  return (
    <>
      <style>{`
				body {
					background-color: #2d2c34;
					color: #fafafc;
				}
			`}</style>
      <HomeWrapper>
        <Image src={cutUrlImage} alt="가위로 주소 자르기" width={200} height={140} priority />
        <HomeIntro>
          <H1Title>긴 주소를 잛은 주소로 줄이세요</H1Title>
          <Derscription>길고 복잡한 링크 주소를 짧게 줄이는 단축 URL 서비스</Derscription>
        </HomeIntro>
        <StyledForm onSubmit={handleCreate}>
          <StyledInput value={url} onChange={handleChange} placeholder="주소를 입력하세요" />
          <StyledButton disabled={!url}>줄이기</StyledButton>
        </StyledForm>
        {shortUrl && (
          <StyledForm onSubmit={handleCopy}>
            <StyledInput readOnly value={`${process.env.NEXT_PUBLIC_BASE_URL}/${shortUrl}`} ref={inputRef} />
            <StyledButton variant="secondary">복사하기</StyledButton>
          </StyledForm>
        )}
      </HomeWrapper>
    </>
  );
}

const HomeWrapper = styled.div`
  width: 100%;
  max-width: 750px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HomeIntro = styled.div`
  margin: 25px 0 70px;
`;

const H1Title = styled.h1`
  font-size: 2.875rem;
  font-weight: 500;
  margin: 0;
`;

const Derscription = styled.p`
  font-size: 1.25rem;
  margin: 0;
`;

const StyledForm = styled.form`
  display: flex;
  margin: 15px 0;
`;

const StyledButton = styled(Button)`
  flex-shrink: 0;
  flex-basis: 130px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  font-size: 1.125rem;
`;
