import { type ReactNode } from "react";


interface AuthFormBodyProps {
  children: ReactNode;
}

const AuthFormBody = ({ children }: AuthFormBodyProps) => {
  return <div className="auth-form-body">{children}</div>;
};

export default AuthFormBody;
