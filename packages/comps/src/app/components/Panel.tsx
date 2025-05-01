import { ComponentProps, PropsWithChildren } from 'react';

export default function Panel({
  children,
  ...rest
}: PropsWithChildren<ComponentProps<'div'>>) {
  return <div {...rest}>{children}</div>;
}
