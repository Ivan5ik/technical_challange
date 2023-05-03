import { useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Link from 'next/link';

import Done from '../../../public/assets/done.svg';
import { CustomInput } from '../Input';

import {
  BusinesDescription,
  FormDescription,
  FormTitle,
  RootForm,
  StyledLink,
  NameWrapper,
  TextPrivacy,
  CheckboxContainer,
} from './style';

const Form = () => {
  const trigeredBlock = useRef<HTMLDivElement>(null);
  const methods = useForm<FormInputs>();

  const { register, handleSubmit, reset } = methods;

  const [check, setCheck] = useState(false);

  const onSubmit = async (data: FormInputs) => {
    if (!check && trigeredBlock.current) {
      trigeredBlock.current.style.border = '1px dashed red';
      trigeredBlock.current.style.borderRadius = '3px';
      setTimeout(() => {
        trigeredBlock.current!.style.border = '1px dashed white';
      }, 2000);
      return;
    }

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert(
        `Your data (${data.firstName}, ${data.lastName}, ${data.userName}, ${data.email} and password) has been successfully sent!`
      );
    }

    reset(() => ({
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
    }));
  };

  const handleCheck = () => setCheck((item) => !item);

  return (
    <RootForm>
      <FormTitle>Sign Up</FormTitle>
      <FormDescription>Create your account</FormDescription>
      <FormProvider {...methods}>
        <form className={'mainForm'} onSubmit={handleSubmit(onSubmit)}>
          <NameWrapper className={'formItem'}>
            <CustomInput
              name={'firstName'}
              title={'First Name'}
              rules={register('firstName', {
                required: 'First name is required!',
                maxLength: {
                  value: 20,
                  message: 'Max 20 symbols',
                },
              })}
              placeholder={'Ryan'}
              isNameField={true}
            />

            <CustomInput
              name={'lastName'}
              title={'Last Name'}
              rules={register('lastName', {
                required: 'Last name is required!',
                maxLength: {
                  value: 20,
                  message: 'Max 20 symbols',
                },
              })}
              placeholder={'Fay'}
              isNameField={true}
            />
          </NameWrapper>
          <CustomInput
            name={'userName'}
            title={'User Name'}
            rules={register('userName', {
              required: 'User Name is required!',
              maxLength: {
                value: 20,
                message: 'Max 20 symbols',
              },
            })}
            placeholder={'ryanfay'}
            isNameField={false}
          />

          <CustomInput
            name={'email'}
            rules={register('email', {
              required: 'Email field is required!',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'The input is not valid E-mail!',
              },
            })}
            title={'Email'}
            placeholder={'ryanfay@edgevana.com'}
            isNameField={false}
          />

          <CustomInput
            name={'password'}
            rules={register('password', {
              required: 'Password is required!',
              minLength: {
                value: 8,
                message: 'Password must have at least 8 characters',
              },
            })}
            title={'Password'}
            placeholder={'Password'}
            isNameField={false}
            showPassword={true}
          />

          <CheckboxContainer ref={trigeredBlock}>
            <input
              className="inputCheckBox"
              type="checkbox"
              checked={check}
              id="one"
            />
            <label className="labelCheckBox" htmlFor="one">
              <span onClick={handleCheck} />
              <Done className="done" onClick={handleCheck} />
            </label>
            <TextPrivacy onClick={handleCheck}>
              I certify that i am 18 years of age or older, i agree to the to
              Edgevana`s{' '}
              <Link href={'/'} legacyBehavior target="_blank">
                <StyledLink>Terms of Use</StyledLink>
              </Link>
              , and i have read the{' '}
              <Link href={'/'} legacyBehavior target="_blank">
                <StyledLink className="privacy"> Privacy Policy</StyledLink>
              </Link>
              .
            </TextPrivacy>
          </CheckboxContainer>
          <button className="submit" type="submit">
            Sign Up
          </button>
        </form>
      </FormProvider>
      <BusinesDescription>
        <Link href={'/'} legacyBehavior>
          <StyledLink>Sign up</StyledLink>
        </Link>
        &nbsp;for business account
      </BusinesDescription>
    </RootForm>
  );
};

export default Form;
