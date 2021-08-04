/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import ListContainer from './ListContainer';
import { MemoryRouter as Router } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get(
    'https://hey-arnold-api.herokuapp.com/api/v1/characters',
    (req, res, ctx) => {
      return res(
        ctx.json(
          [...Array(5)].map((_, i) => ({
            id: i,
            name: 'Arnold',
            image: 'http://image.com',
          }))
        )
      );
    }
  )
);


describe('List Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('maps the behavior of the list container component', async () => {
    render(
      <Router>
        <ListContainer/>
      </Router>);

    screen.getByText('Loading ...');

    const ul = await screen.findByTestId('list');
  
    expect(ul.children.length).toEqual(5);
  });
});
