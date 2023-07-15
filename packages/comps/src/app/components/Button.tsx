import { OneOf } from '@react-course/utils';
import { PropsWithChildren } from 'react';
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
>;

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
}: ButtonProps) {
  const classes = className('flex items-center px-3 py-1.5 border', {
    'bg-blue-500 border-blue-600 text-white': primary,
    'bg-gray-500 border-gray-600 text-white': secondary,
    'bg-green-500 border-green-600 text-white': success,
    'bg-yellow-400 border-yellow-400 text-white': warning,
    'bg-red-500 border-red-500 text-white': danger,
    'rounded-full': rounded,
    'bg-white border-2': outline,
    'text-blue-400': outline && primary,
    'text-gray-400': outline && secondary,
    'text-green-400': outline && success,
    'text-yellow-400': outline && warning,
    'text-red-400': outline && danger,
  });

  return <button className={classes}>{children}</button>;
}

export default Button;
