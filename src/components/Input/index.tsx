import React, { FC, FormEvent, useState } from "react";
import classNames from "classnames";
import Eye from "../../../public/assets/eye.svg";

import { LabelForm } from "./style";

interface IInput {
  title: string;
  rules: any;
  placeholder: string;
  children: any;
  isNameField: boolean;
  showPassword?: boolean;
}

const Input: FC<IInput> = ({
  title,
  rules,
  children,
  placeholder,
  isNameField,
  showPassword,
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
        id={"input"}
        value={inputValue}
        className={classNames("input", { nameOfLastName: isNameField })}
        {...rules}
        onChange={handleChange}
        placeholder={placeholder}
        type={showPassword ? "text" : "password"}
      />
      {children}
    </LabelForm>
  );
};

export { Input };
