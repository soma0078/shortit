import { useState } from 'react';
import { useRouter } from 'next/router';
import Card from './Card';
import Button from './Button';
import { FormButtonWrapper, StyledForm, StyledInput, StyledLabel } from './ShortLinkForm';

export const QRCodeFormType = {
  Create: 'create',
  Edit: 'edit',
};

export default function QRCodeForm({ type = QRCodeFormType.Create, initialValues = { title: '', url: '' }, onSubmit }) {
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
            {type === QRCodeFormType.Create ? '등록하기' : type === QRCodeFormType.Edit ? '수정하기' : null}
          </Button>
        </FormButtonWrapper>
      </StyledForm>
    </Card>
  );
}
