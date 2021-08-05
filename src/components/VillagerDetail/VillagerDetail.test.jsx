/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import VillagerDetail from '../VillagerDetail/VillagerDetail';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get(
    'https://ac-vill.herokuapp.com/villagers/:id',
    (req, res, ctx) => {
      return res(
        ctx.json(
          [{
            'name':'Admiral',
            'image':'https://vignette.wikia.nocookie.net/animalcrossing/images/e/ed/Admiral_NH.png/revision/latest?cb=20200802081138',
            'species':'bird',
            'phrase':'aye aye',
            'quote': 'Only quitters give up.',
            'skill': 'Writing about pickles',
            'personality': 'cranky',
            
          }        
          ])
      );
            
    }
  )
);

describe('Villager Details', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of villager details', async () => {
    render(<MemoryRouter initialEntries={['/:id']}><VillagerDetail /></MemoryRouter>);

    screen.getByText('Loading...');
    return waitFor(async () => {
      const ul = await screen.findByTestId('1');
      expect(ul.children.length).toEqual(18);
    });
  });
});
