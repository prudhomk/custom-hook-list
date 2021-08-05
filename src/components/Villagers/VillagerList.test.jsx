/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import VillagerList from './VillagerList';
import { MemoryRouter } from 'react-router-dom';

describe('Villager List component', () => {
  const list = [
    {
      name: 'hello',
      species: 'phrase',
      phrase: 'species',
      image: 'whatever',
      _id: 'string'
    }
  ];
  afterEach(() => cleanup());
  it('renders Villager List', () => {
    const { asFragment } = render(<MemoryRouter><VillagerList villagers={list}/></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
