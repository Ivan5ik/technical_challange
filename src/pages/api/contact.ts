import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const data = req.body as FormInputs;

    const formErrors: FormErrors = {};

    if (!data.firstName) {
      formErrors.firstName = 'First Name is required';
    }

    if (data.firstName.length > 20) {
      formErrors.firstName = 'Name cannot exceed 20 characters';
    }

    if (!data.lastName) {
      formErrors.lastName = 'Last Name is required';
    }

    if (data.lastName.length > 20) {
      formErrors.lastName = 'Name cannot exceed 20 characters';
    }

    if (!data.userName) {
      formErrors.userName = 'User Name is required';
    }

    if (data.userName.length > 20) {
      formErrors.userName = 'Name cannot exceed 20 characters';
    }

    if (!data.email) {
      formErrors.email = 'Email is required';
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
      formErrors.email = 'Invalid email address';
    }

    if (!data.password) {
      formErrors.password = 'Password is required';
    }

    if (data.password.length > 100) {
      formErrors.password = 'Message cannot exceed 100 characters';
    }

    if (Object.keys(formErrors).length > 0) {
      res.status(400).json({ errors: formErrors });
    } else {
      res.status(200).json({ message: 'Form submitted successfully' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
