import React, { FC, FormEvent, ReactNode, useState } from "react";
import classNames from "classnames";
import Eye from "../../../public/assets/eye.svg";

import {
  Block1,
  Block2,
  Block3,
  LabelForm,
  LavelComlicatedPassword,
} from "./style";
import {
  hasLetter,
  hasLettersNumbersSymbols,
  hasNumber,
  hasSpecialSymbol,
  onlyLetter,
} from "src/utils/common";
import { useForm } from "react-hook-form";

interface IInput {
  title: string;
  rules: any;

  placeholder: string;
  children: ReactNode;
  isNameField: boolean;
  showPassword?: boolean;
}

const CustomInput: FC<IInput> = ({
  title,
  rules,

  children,
  placeholder,
  isNameField,
  showPassword = false,
}) => {
  const [inputValue, setInputValue] = useState("");

  const [visiblePassword, setVisiblePassword] = useState(false);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <LabelForm>
      <label
        className={classNames({ show: inputValue }, "label")}
        htmlFor={"input"}
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
        autoComplete="new-password"
        id={"input"}
        value={inputValue}
        className={classNames("input", { nameOfLastName: isNameField })}
        {...rules}
        onChange={handleChange}
        placeholder={placeholder}
        type={showPassword && !visiblePassword ? "password" : "text"}
      />
      {showPassword && (
        <LavelComlicatedPassword>
          <Block1
            className={classNames({
              block1:
                (onlyLetter.test(inputValue) && inputValue.length >= 8) ||
                (hasLetter.test(inputValue) && inputValue.length >= 8) ||
                (hasNumber.test(inputValue) && inputValue.length >= 8) ||
                inputValue.length >= 8,
            })}
          ></Block1>
          <Block2
            className={classNames({
              block2:
                (inputValue.length >= 8 &&
                  hasLetter.test(inputValue) &&
                  hasNumber.test(inputValue)) ||
                (inputValue.length >= 8 &&
                  hasLetter.test(inputValue) &&
                  hasSpecialSymbol.test(inputValue)),
            })}
          ></Block2>
          <Block3
            className={classNames({
              block3: hasLettersNumbersSymbols.test(inputValue),
            })}
          ></Block3>
        </LavelComlicatedPassword>
      )}
      {children}
    </LabelForm>
  );
};

export { CustomInput };
