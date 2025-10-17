import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App.jsx';
import '@testing-library/jest-dom';

it('renderiza sin errores', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
});

describe('App', () => {
  it('renderiza sin errores', () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });
});