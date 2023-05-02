import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = req.body as FormInputs;

    const formErrors: FormErrors = {};

    if (!data.firstName) {
      formErrors.firstName = "First Name is required";
    } else if (data.firstName.length > 50) {
      formErrors.firstName = "Name cannot exceed 50 characters";
    }

    if (!data.lastName) {
      formErrors.lastName = "Last Name is required";
    } else if (data.lastName.length > 50) {
      formErrors.lastName = "Name cannot exceed 50 characters";
    }

    if (!data.userName) {
      formErrors.userName = "User Name is required";
    } else if (data.userName.length > 50) {
      formErrors.userName = "Name cannot exceed 50 characters";
    }

    if (!data.email) {
      formErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
      formErrors.email = "Invalid email address";
    }

    if (!data.password) {
      formErrors.password = "Password is required";
    } else if (data.password.length > 50) {
      formErrors.password = "Message cannot exceed 50 characters";
    }

    if (Object.keys(formErrors).length > 0) {
      res.status(400).json({ errors: formErrors });
    } else {
      res.status(200).json({ message: "Form submitted successfully" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Method Not Allowed");
  }
}
