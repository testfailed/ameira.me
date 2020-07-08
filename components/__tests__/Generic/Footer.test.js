import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as nextRouter from 'next/router';
import * as reactUse from 'react-use';

import Footer from '../../Generic/Footer';

nextRouter.useRouter = jest.fn();
reactUse.useMedia = jest.fn();

nextRouter.useRouter.mockImplementation(() => ({ route: '/', query: {} }));

describe('Footer', () => {
  test('renders and matches snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
