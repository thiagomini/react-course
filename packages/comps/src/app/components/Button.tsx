import { OneOf } from '@react-course/utils';
import { PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<
  {
    rounded?: boolean;
    outline?: boolean;
  } & OneOf<{
    primary?: boolean;
    secondary?: boolean;
    success?: boolean;
    warning?: boolean;
    danger?: boolean;
  }>
>;

function Button({ children }: ButtonProps) {
  return <button>{children}</button>;
}

export default Button;
