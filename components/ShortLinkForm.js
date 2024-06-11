import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Card from './Card';
import Button from './Button';
import Input from './Input';

export const ShortLinkFormType = {
  Create: 'create',
  Edit: 'edit',
};

export default function ShortLinkForm({
  type = ShortLinkFormType.Create,
  initialValues = { title: '', url: '' },
  onSubmit,
}) {
  const { title, url } = initialValues;
  const [values, setValues] = useState({ title, url });
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit(values);
    setValues({
      title: '',
      url: '',
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  return (
    <Card>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          제목
          <StyledInput name="title" value={values.title} onChange={handleChange} placeholder="제목을 입력해주세요." />
        </StyledLabel>
        <StyledLabel>
          주소
          <StyledInput
            name="url"
            value={values.url}
            onChange={handleChange}
            placeholder="https://example.com/login-url"
          />
        </StyledLabel>
        <FormButtonWrapper>
          <Button variant="outline" type="button" onClick={() => router.back()}>
            취소
          </Button>
          <Button>
            {type === ShortLinkFormType.Create ? '등록하기' : type === ShortLinkFormType.Edit ? '수정하기' : null}
          </Button>
        </FormButtonWrapper>
      </StyledForm>
    </Card>
  );
}

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  font-weight: 500;
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled(Input)`
  margin: 10px 0 30px;
  font-size: 1.125rem;
`;

export const FormButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: end;
  gap: 10px;
`;
