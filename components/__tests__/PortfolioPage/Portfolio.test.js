import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as nextRouter from 'next/router';
import * as reactIntersectionObserver from 'react-intersection-observer';

import Portfolio from '../../PortfolioPage/Portfolio';

jest.mock('react-use');
nextRouter.useRouter = jest.fn();
reactIntersectionObserver.useInView = jest.fn().mockReturnValue([]);

nextRouter.useRouter.mockImplementation(() => ({ route: '/', query: {} }));

const article = {
  image: 'image.jpg',
  title: 'title',
  date: '2019-10-10T00:00:00',
  description: 'desc',
  excerpt: 'excerpt',
  slug: 'slug',
  onTopRow: true,
};

const articles = [
  article,
  {
    ...article,
    title: 'title2',
  },
];

describe('Hero', () => {
  test('renders and matches snapshot', () => {
    const { asFragment } = render(<Portfolio articles={articles} />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Check that the title, description and date are correctly rendered', () => {
    render(<Portfolio articles={[article]} />);
    expect(screen.getByText('title')).toBeInTheDocument();
    expect(screen.getByText('desc')).toBeInTheDocument();
    expect(screen.getByText('October, 2019')).toBeInTheDocument();
  });
});
