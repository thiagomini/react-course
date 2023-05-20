import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(getByText(/Welcome to jsx-tutorial!/)).toBeTruthy();
  });

  it('should have a custom greeting', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App message="Custom Message!" />
      </BrowserRouter>
    );
    expect(getByText(/Custom Message!/)).toBeTruthy();
  });

  it('should have the current time', async () => {
    const { findByText } = render(
      <BrowserRouter>
        <App message="Custom Message!" />
      </BrowserRouter>
    );
    const timeDisplay = await findByText(
      /Current Time: \d{1,2}:\d{2}:\d{2} \w{2}/
    );

    expect(timeDisplay).toBeTruthy();
  });

  it('should a number input', async () => {
    const { findByRole } = render(
      <BrowserRouter>
        <App message="Custom Message!" />
      </BrowserRouter>
    );
    const numberSelector = await findByRole('spinbutton');

    expect(numberSelector.getAttribute('type')).toBe('number');
  });
});
