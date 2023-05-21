import { render } from '@testing-library/react';

import ProfileCard from './profile-card';

describe('ProfileCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ProfileCard title="" handle="@" image="" />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a custom title', () => {
    const { getByText } = render(
      <ProfileCard title="Custom" handle="@" image="" />
    );

    expect(getByText(/Custom/)).toBeTruthy();
  });

  it('should have a custom twitter handle', () => {
    const { getByText } = render(
      <ProfileCard title="" handle="@user" image="" />
    );

    expect(getByText(/@user/)).toBeTruthy();
  });

  it('should have a custom image', () => {
    const { getByAltText } = render(
      <ProfileCard title="" handle="@" image="https://picsum.photos/200" />
    );

    expect(getByAltText(/PDA Logo/)).toBeTruthy();
  });
});
