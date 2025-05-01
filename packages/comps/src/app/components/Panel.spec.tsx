import { render, screen } from '@testing-library/react';
import Panel from './Panel';

describe('PanelComponent', () => {
  test('displays the children component inside the panel', () => {
    const children = <div>Some Child Element</div>;

    render(<Panel>{children}</Panel>);

    expect(screen.getByText('Some Child Element')).toBeInTheDocument();
  });
});
