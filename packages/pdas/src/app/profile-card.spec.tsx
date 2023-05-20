import { render } from '@testing-library/react';

import ProfileCard from './profile-card';

describe('ProfileCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProfileCard title="" handle="@" />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a custom title', () => {
    const { getByText } = render(<ProfileCard title="Custom" handle="@" />);

    expect(getByText(/Custom/)).toBeTruthy();
  });

  it('should have a custom twitter handle', () => {
    const { getByText } = render(<ProfileCard title="" handle="@user" />);

    expect(getByText(/@user/)).toBeTruthy();
  });
});
