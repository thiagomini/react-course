import { OneOf } from '@react-course/utils';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import className from 'classnames';

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
> &
  ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
  ...btnProps
}: ButtonProps) {
  const classes = className('flex items-center px-3 py-1.5 border', {
    'text-white': !outline,
    'bg-blue-500 border-blue-600': primary,
    'bg-gray-500 border-gray-600': secondary,
    'bg-green-500 border-green-600': success,
    'bg-yellow-500 border-yellow-500': warning,
    'bg-red-500 border-red-500': danger,
    'rounded-full': rounded,
    'bg-white border-2': outline,
    'text-blue-400': outline && primary,
    'text-gray-400': outline && secondary,
    'text-green-400': outline && success,
    'text-yellow-400': outline && warning,
    'text-red-400': outline && danger,
  });

  return (
    <button {...btnProps} className={classes}>
      {children}
    </button>
  );
}

export default Button;
