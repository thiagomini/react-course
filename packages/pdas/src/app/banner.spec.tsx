import { render } from '@testing-library/react';

import Banner from './banner';

describe('Banner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Banner />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a title', () => {
    const { getByText } = render(<Banner />);
    expect(getByText(/Personal Digital Assistants/)).toBeTruthy();
  });
});
