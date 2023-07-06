import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('displays the given text', () => {
    const { getByText } = render(<Button>Custom Text</Button>);

    expect(getByText('Custom Text')).toBeInTheDocument();
  });
});
