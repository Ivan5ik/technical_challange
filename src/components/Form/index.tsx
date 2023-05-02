import { useForm } from "react-hook-form";
import Done from "../../../public/assets/done.svg";
import Link from "next/link";

import {
  BusinesDescription,
  FormDescription,
  FormTitle,
  RootForm,
  StyledLink,
  WrapperName,
  TextPrivacy,
} from "./style";

import { useState } from "react";
import { InputComponent } from "../Input";
import { useRouter } from "next/router";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const [check, setCheck] = useState(false);

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const onSubmit = async (data: FormInputs) => {
    if (!check) return;

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (response.ok) {
      alert(
        `Your data (${data.firstName}, ${data.lastName}, ${data.userName}, ${data.email} and password) has been successfully sent!`
      );
    } else {
      setFormErrors(responseData.errors);
    }
  };

  return (
    <RootForm>
      <FormTitle>Sign Up</FormTitle>
      <FormDescription>Create your account</FormDescription>
      <form className={"mainForm"} onSubmit={handleSubmit(onSubmit)}>
        <WrapperName className={"formItem"}>
          <InputComponent
            title={"First Name"}
            rules={register("firstName", {
              required: true,
              maxLength: 20,
            })}
            placeholder={"Ryan"}
            isNameField={true}
          >
            {errors.firstName && (
              <p className={"errorText"}>First name is required!</p>
            )}
            {formErrors.firstName && <span>{formErrors.firstName}</span>}
          </InputComponent>
          <InputComponent
            title={"Last Name"}
            rules={register("lastName", {
              required: true,
              maxLength: 20,
            })}
            placeholder={"Fay"}
            isNameField={true}
          >
            {errors.lastName && (
              <p className={"errorText"}>Last name is required!</p>
            )}
            {formErrors.lastName && <span>{formErrors.lastName}</span>}
          </InputComponent>
        </WrapperName>
        <InputComponent
          title={"User Name"}
          rules={register("userName", {
            required: true,
            maxLength: 20,
          })}
          placeholder={"ryanfay"}
          isNameField={false}
        >
          {errors.userName && (
            <p className={"errorText"}>Last name is required!</p>
          )}
          {formErrors.userName && <span>{formErrors.userName}</span>}
        </InputComponent>
        <InputComponent
          rules={register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "The input is not valid E-mail!",
            },
          })}
          title={"Email"}
          placeholder={"ryanfay@edgevana.com"}
          isNameField={false}
        >
          {errors.email && (
            <p className={"errorText"}>
              The InputComponent is not valid E-mail!
            </p>
          )}
          {formErrors.email && <span>{formErrors.email}</span>}
        </InputComponent>
        <InputComponent
          rules={register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          })}
          title={"Password"}
          placeholder={"Password"}
          isNameField={false}
          showPassword={true}
        >
          {errors.password && (
            <p className={"errorText"}>
              Password must have at least 8 characters
            </p>
          )}
          {formErrors.password && <span>{formErrors.password}</span>}
        </InputComponent>
        <div style={{ display: "flex" }}>
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
            Edgevana`s{" "}
            <Link href={"/"} legacyBehavior target="_blank">
              <StyledLink>Terms of Use</StyledLink>
            </Link>
            , and i have read the{" "}
            <Link href={"/"} legacyBehavior target="_blank">
              <StyledLink className="privacy"> Privacy Policy</StyledLink>
            </Link>
            .
          </TextPrivacy>
        </div>
        <button className="submit" type="submit">
          Sign Up
        </button>
      </form>
      <BusinesDescription>
        <Link href={"/"} legacyBehavior>
          <StyledLink>Sign up</StyledLink>
        </Link>
        &nbsp;for business account
      </BusinesDescription>
    </RootForm>
  );
};

export default Form;
