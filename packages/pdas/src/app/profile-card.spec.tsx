import { render } from '@testing-library/react';

import ProfileCard from './profile-card';

describe('ProfileCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProfileCard title="" />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a custom title', () => {
    const { getByText } = render(<ProfileCard title="Custom" />);

    expect(getByText(/Custom/)).toBeTruthy();
  });
});
