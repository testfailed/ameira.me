import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import * as nextRouter from 'next/router';
import * as reactIntersectionObserver from 'react-intersection-observer';
import * as reactUse from 'react-use';

import About from '../../HomePage/About';

reactUse.useMedia = jest.fn();
reactIntersectionObserver.useInView = jest.fn().mockReturnValue([]);

describe('About', () => {
  test('renders and matches snapshot', () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('the AboutText is rendered', () => {
    render(<About />);
    expect(screen.getByText(/I have been a tour guide/)).toBeInTheDocument();
  });
  test('the AboutImage is rendered', () => {
    render(<About />);
    expect(screen.getByTestId('about-image')).toBeInTheDocument();
  });
});
