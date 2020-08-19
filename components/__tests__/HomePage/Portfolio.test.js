import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as nextRouter from 'next/router';
import * as reactIntersectionObserver from 'react-intersection-observer';

import Portfolio from '../../HomePage/Portfolio';

jest.mock('react-use');
nextRouter.useRouter = jest.fn();
reactIntersectionObserver.useInView = jest.fn().mockReturnValue([]);

nextRouter.useRouter.mockImplementation(() => ({ route: '/', query: {} }));

describe('Portfolio', () => {
  test('renders and matches snapshot', () => {
    const article = {
      invert: false,
      title: 'title',
      image: 'image.jpg',
      date: '2019-10-10T00:00:00',
      description: 'desc',
      excerpt: 'excerpt',
    };

    const articles = [
      article,
      {
        ...article,
        invert: true,
      },
    ];
    const { asFragment } = render(<Portfolio articles={articles} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
