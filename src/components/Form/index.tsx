import { useForm } from "react-hook-form";

import { FormDescription, FormTitle, RootForm, WrapperName } from "./style";
import Input from "../Input";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  console.log("register", { ...register("firstName") });

  return (
    <RootForm>
      <FormTitle>Sign Up</FormTitle>
      <FormDescription>Create your account</FormDescription>
      <form className={"mainForm"} onSubmit={handleSubmit(onSubmit)}>
        <WrapperName className={"formItem"}>
          <Input
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
          </Input>
          <Input
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
          </Input>
        </WrapperName>
        <Input
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
        </Input>
        <Input
          rules={register("email", {
            required: true,
            maxLength: 20,
          })}
          title={"Email"}
          placeholder={"ryanfay@edgevana.com"}
          isNameField={false}
        >
          {errors.email && (
            <p className={"errorText"}>The input is not valid E-mail!</p>
          )}
        </Input>
        <Input
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
        </Input>
        <button className="submit" type="submit" value="Sign Up">
          Sign Up
        </button>
      </form>
    </RootForm>
  );
};

export default Form;
