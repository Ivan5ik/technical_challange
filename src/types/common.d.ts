declare interface ILayoutProps {
  children: React.ReactNode;
}

declare interface FormInputs {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
}

declare interface FormErrors {
  firstName?: string;
  lastName?: string;
  userName?: string;
  email?: string;
  password?: string;
}
