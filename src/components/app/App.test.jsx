import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App component', () => {
  it('displays a list of villagers on home page', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement();
  });

  it('displays a villager details', async () => {
    render(
      <MemoryRouter initialEntries={['/7']}>
        <App />
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    await screen.findByText('イッテツ Ittetsu');
    await screen.findByAltText('Admiral');
    await screen.findByText('bird');
    await screen.findByText('aye aye');
    await screen.findByText('Only quitters give up.');
    await screen.findByText('Writing about pickles');
    await screen.findByText('cranky');
    
  });
});
