import { render } from '@testing-library/react';
import AnimalShow, { AnimalShowProps } from './animal-show';

describe('Animal Show', () => {
  it('should render successfully', () => {
    const { baseElement } = makeComponent();
    expect(baseElement).toBeTruthy();
  });

  it('has an animal image', () => {
    const { getByAltText } = makeComponent();

    expect(getByAltText(/Animal/)).toBeTruthy();
  });

  it('displays the given animal type', () => {
    const { getByAltText } = makeComponent({ type: 'cat' });

    expect(getByAltText(/Animal cat/)).toBeTruthy();
  });
});

function makeComponent(props: AnimalShowProps = { type: 'dog' }) {
  return render(<AnimalShow {...props} />);
}
