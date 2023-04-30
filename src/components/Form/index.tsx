import { FC, useEffect, useRef, useState } from 'react';

import { LabelForm, RootForm, WrapperName } from './style';
import Eye from '../../../public/assets/eye.svg';
import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  // const itemRef = useRef()

  const onSubmit = (data: any) => {
    console.log(data);
  };

  console.log('register', { ...register('firstName') });

  return (
    <RootForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <WrapperName>
          <LabelForm>
            First Name
            <input
              className="name nameOfLastName"
              {...register('firstName', { required: true })}
            />
            {errors.firstName && <p>First name is required</p>}
          </LabelForm>
          <LabelForm>
            Last Name
            <input
              className="name nameOfLastName"
              {...register('lastName', { required: true })}
            />
            {errors.firstName && <p>Last name is required</p>}
          </LabelForm>
        </WrapperName>

        <LabelForm>
          User Name
          <input
            className="name"
            {...register('userName', { required: true })}
          />
          {errors.firstName && <p>User name is required</p>}
        </LabelForm>
        <LabelForm>
          Email
          <input
            autoComplete={'new-password'}
            className="name"
            {...register('email', { required: true })}
          />
          {errors.firstName && <p>Email is required</p>}
        </LabelForm>
        <LabelForm>
          Password
          <div className="position">
            <input
              autoComplete={'new-password'}
              className="name"
              type={showPassword ? 'text' : 'password'}
              {...register('password', { required: true })}
            />

            <Eye
              className="svgEye"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          {errors.firstName && <p>Password is required</p>}
        </LabelForm>

        <input className="submit" type="submit" value="Sign Up" />
      </form>
    </RootForm>
  );
};

export default Form;
