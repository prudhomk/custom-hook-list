import React from 'react';
import { render } from '@testing-library/react';
import Villager from './Villager';
import { MemoryRouter } from 'react-router-dom'

describe('Villager component', () => {
  it('renders Villager', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Villager
          name="Booger"
          species="Snot"
          phrase="Ooga Booga"
          image="https://image.com/image.jpeg"
        />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});