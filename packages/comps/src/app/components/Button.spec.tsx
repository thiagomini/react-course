import { render } from '@testing-library/react';
import Button, { ButtonProps } from './Button';

describe('Button', () => {
  test('displays the given text', () => {
    const { getByText } = createComponent({ text: 'Custom Text' });

    expect(getByText('Custom Text')).toBeInTheDocument();
  });
});

function createComponent(props: ButtonProps) {
  return render(<Button {...props} />);
}
