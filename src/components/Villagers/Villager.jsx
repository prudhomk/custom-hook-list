import React from 'react';
import PropTypes from 'prop-types';


const Villager = ({ name, species, phrase, image }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      <p>{name}</p>
      <p>{species}</p>
      <p>{phrase}</p>
    </figcaption>
  </figure>

);

Villager.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  phrase: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Villager;
