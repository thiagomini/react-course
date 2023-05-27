import { render } from '@testing-library/react';
import AnimalShow from './animal-show';

describe('Animal Show', () => {
  it('should render successfully', () => {
    const { baseElement } = makeComponent();
    expect(baseElement).toBeTruthy();
  });

  it('has an animal image', () => {
    const { getByAltText } = makeComponent();

    expect(getByAltText(/Animal/)).toBeTruthy();
  });
});

function makeComponent() {
  return render(<AnimalShow />);
}
