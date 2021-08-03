/* eslint-disable max-len */
import React from 'react';
import { render } from '@testing-library/react';
import ListItem from './ListItem';

describe('List item component', () => {
  it('renders a list item to the page', () => {
    const url = 'https://vignette.wikia.nocookie.net/heyarnold/images/4/42/Arnie.jpg/revision/latest/scale-to-width-down/310?cb=20110109195825';
    const { asFragment } = render(<ListItem image={url}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
