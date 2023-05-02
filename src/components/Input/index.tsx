import React, { FC, FormEvent, useState } from 'react';
import classNames from 'classnames';
import Eye from '../../../public/assets/eye.svg';

import { LabelForm } from './style';
import { Control, useForm, useFormContext } from 'react-hook-form';
import { FormInputs } from 'src/interfaces';

interface IInput {
  title: string;
  name: string;
  placeholder: string;
  children: any;
  isNameField: boolean;
  showPassword?: boolean;
  control: Control<FormInputs>;
}

const InputComponent: FC<IInput> = ({
  title,
  name,
  children,
  placeholder,
  isNameField,
  showPassword = false,
}) => {
  console.log(useFormContext());

  // const { register } = useFormContext();

  const [visiblePassword, setVisiblePassword] = useState(false);

  return (
    <LabelForm>
      <label
        // className={classNames({ show: inputValue }, 'label')}
        htmlFor={'input'}
      >
        {title}
      </label>
      {showPassword && (
        <Eye
          className="svgEye"
          onClick={() => setVisiblePassword(!visiblePassword)}
        />
      )}
      <input
        id={'input'}
        // value={inputValue}
        className={classNames('input', { nameOfLastName: isNameField })}
        placeholder={placeholder}
        type={visiblePassword ? 'password' : 'text'}
        // {...register(`${name}`)}
      />
      {children}
    </LabelForm>
  );
};

export { InputComponent };
