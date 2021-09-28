import React from 'react';
import { render, screen } from '@testing-library/react';
import HeyArnoldList from './HeyArnoldList';
import { MemoryRouter } from 'react-router-dom';

describe('list', () => {
  it('displays a list of hey arnold characters', async () => {
    render(
      <MemoryRouter>
        <HeyArnoldList />
      </MemoryRouter>
    );

    const list = await screen.findByLabelText('character-list');
    expect(list).toMatchSnapshot();
  });
});
