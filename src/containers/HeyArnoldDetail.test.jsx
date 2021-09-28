import React from 'react';
import { render, screen } from '@testing-library/react';
import HeyArnoldDetail from './HeyArnoldDetail';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import detail from './detail.json';

const server = setupServer(
  // eslint-disable-next-line max-len
  rest.get('https://hey-arnold-api.herokuapp.com/api/v1/characters/:id', 
    (req, res, ctx) => {
      return res(
        ctx.json(detail)
      );
    })
);

describe('list', () => {

  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays one hey arnold characters', async () => {
    render(
      <MemoryRouter initialEntries={['/5da237699734fdcb7bef8f5c']}>
        <HeyArnoldDetail />
      </MemoryRouter>
    );

    screen.getAllByAltText('loading gif');
    const item = await screen.findByLabelText('figure', {}, { timeout: 5000 });
    screen.debug();
    expect(item).toMatchSnapshot();
  });
});
