import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Hero from '../../HomePage/Hero';

describe('Hero', () => {
  test('renders and matches snapshot', () => {
    const { asFragment } = render(<Hero />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Ameira Yanni is rendered', () => {
    render(<Hero />);
    expect(screen.getByText('Ameira Yanni')).toBeInTheDocument();
  });
});
