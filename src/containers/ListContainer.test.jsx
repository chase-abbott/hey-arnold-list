import React from 'react';
import { render, screen } from '@testing-library/react';
import ListContainer from './ListContainer';
import { MemoryRouter as Router } from 'react-router';


describe('List Container', () => {
  it('maps the behavior of the list container component', async () => {
    render(<ListContainer/>);

    screen.getByText('Loading ...');
  });
});
