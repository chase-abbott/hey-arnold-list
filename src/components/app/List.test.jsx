/* eslint-disable max-len */
import React from 'react';
import { render } from '@testing-library/react';
import List from './List';

describe('List item component', () => {
  it('renders a list item to the page', () => {
    const characters = [{
      '_id': '5da237699734fdcb7bef8fb8',
      'name': 'Shelley',
      'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/c/cb/Shelley.jpg/revision/latest/scale-to-width-down/310?cb=20120527025256'
    }];
    
    const { asFragment } = render(<List characters={characters}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
