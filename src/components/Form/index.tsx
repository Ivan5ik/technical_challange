import { FormProvider, useForm } from 'react-hook-form';
import Done from '../../../public/assets/done.svg';
import Link from 'next/link';

import {
  BusinesDescription,
  FormDescription,
  FormTitle,
  RootForm,
  StyledLink,
  WrapperName,
  TextPrivacy,
  LavelComlicatedPassword,
  Block1,
  Block2,
  Block3,
} from './style';

import { useState } from 'react';
import { InputComponent } from '../Input';
import { FormInputs } from 'src/interfaces';

const Form = () => {
  const methods = useForm<FormInputs>();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const [check, setCheck] = useState(false);

  return (
    <RootForm>
      <FormTitle>Sign Up</FormTitle>
      <FormDescription>Create your account</FormDescription>
      <FormProvider {...methods}>
        <form className={'mainForm'} onSubmit={handleSubmit(onSubmit)}>
          <WrapperName className={'formItem'}>
            <InputComponent
              title={'First Name'}
              name="dddd"
              control={control}
              placeholder={'Ryan'}
              isNameField={true}
            >
              {errors.firstName && (
                <p className={'errorText'}>First name is required!</p>
              )}
            </InputComponent>
            <InputComponent
              title={'Last Name'}
              name="asdasd"
              control={control}
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
            name="aaaaaa"
            control={control}
            placeholder={'ryanfay'}
            isNameField={false}
          >
            {errors.userName && (
              <p className={'errorText'}>Last name is required!</p>
            )}
          </InputComponent>
          <InputComponent
            name="gggggg"
            control={control}
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
            name="hjkhjkhj"
            control={control}
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
          <LavelComlicatedPassword>
            <Block1></Block1>
            <Block2></Block2>
            <Block3></Block3>
          </LavelComlicatedPassword>
          <div style={{ display: 'flex' }}>
            <input
              className="inputCheckBox"
              type="checkbox"
              checked={check}
              id="one"
            />
            <label className="labelCheckBox" htmlFor="one">
              <span onClick={() => setCheck((item) => !item)}></span>
              <Done
                className="done"
                onClick={() => setCheck((item) => !item)}
              />
            </label>
            <TextPrivacy onClick={() => setCheck((item) => !item)}>
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
          </div>
          <button className="submit" type="submit" value="Sign Up">
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
