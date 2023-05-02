import { useForm } from 'react-hook-form';
import Done from '../../../public/assets/done.svg';
import Link from 'next/link';

import {
  FormDescription,
  FormTitle,
  RootForm,
  StyledLink,
  TextPrivacy,
  WrapperName,
} from './style';
import InputComponent from '../Input';
import { useState } from 'react';

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const [check, setCheck] = useState(false);

  return (
    <RootForm>
      <FormTitle>Sign Up</FormTitle>
      <FormDescription>Create your account</FormDescription>
      <form className={'mainForm'} onSubmit={handleSubmit(onSubmit)}>
        <WrapperName className={'formItem'}>
          <InputComponent
            title={'First Name'}
            rules={register('firstName', {
              required: true,
              maxLength: 20,
            })}
            placeholder={'Ryan'}
            isNameField={true}
          >
            {errors.firstName && (
              <p className={'errorText'}>First name is required!</p>
            )}
          </InputComponent>
          <InputComponent
            title={'Last Name'}
            rules={register('lastName', {
              required: true,
              maxLength: 20,
            })}
            placeholder={'Fay'}
            isNameField={true}
          >
            {errors.lastName && (
              <p className={'errorText'}>Last name is required!</p>
            )}
          </InputComponent>
        </WrapperName>
        <InputComponent
          title={'User Name'}
          rules={register('userName', {
            required: true,
            maxLength: 20,
          })}
          placeholder={'ryanfay'}
          isNameField={false}
        >
          {errors.userName && (
            <p className={'errorText'}>Last name is required!</p>
          )}
        </InputComponent>
        <InputComponent
          rules={register('email', {
            required: true,
            maxLength: 20,
          })}
          title={'Email'}
          placeholder={'ryanfay@edgevana.com'}
          isNameField={false}
        >
          {errors.email && (
            <p className={'errorText'}>
              The InputComponent is not valid E-mail!
            </p>
          )}
        </InputComponent>
        <InputComponent
          rules={register('password', {
            required: true,
            minLength: {
              value: 8,
              message: 'Password must have at least 8 characters',
            },
          })}
          title={'Password'}
          placeholder={'Password'}
          isNameField={false}
          showPassword={true}
        >
          {errors.password && (
            <p className={'errorText'}>
              Password must have at least 8 characters
            </p>
          )}
        </InputComponent>
        <div style={{ display: 'flex' }}>
          <input
            className="inputCheckBox"
            type="checkbox"
            checked={check}
            id="one"
          />
          <label className="labelCheckBox" htmlFor="one">
            <span onClick={() => setCheck((item) => !item)}></span>
            <Done className="done" onClick={() => setCheck((item) => !item)} />
          </label>
          <TextPrivacy onClick={() => setCheck((item) => !item)}>
            I certify that i am 18 years of age or older, i agree to the to
            Edgevana`s{' '}
            <Link href={'/'} legacyBehavior target="_blank">
              <StyledLink>Terms of Use</StyledLink>
            </Link>
            , and i have read the{' '}
            <Link href={'/'} legacyBehavior target="_blank">
              <StyledLink> Privacy Policy</StyledLink>
            </Link>
            .
          </TextPrivacy>
        </div>
        <button className="submit" type="submit" value="Sign Up">
          Sign Up
        </button>
      </form>
    </RootForm>
  );
};

export default Form;
