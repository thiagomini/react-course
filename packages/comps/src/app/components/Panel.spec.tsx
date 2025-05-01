import { render, screen } from '@testing-library/react';
import Panel from './Panel';

describe('PanelComponent', () => {
  test('displays the children component inside the panel', () => {
    const children = <div>Some Child Element</div>;

    render(<Panel>{children}</Panel>);

    expect(screen.getByText('Some Child Element')).toBeInTheDocument();
  });

  test('pass down additional props to the parent component', () => {
    const children = <div data-testid="test">Some Child Element</div>;

    render(<Panel className={'border-gray-300'}>{children}</Panel>);

    expect(screen.getByTestId('test').parentNode).toHaveClass(
      'border-gray-300',
    );
  });
});
