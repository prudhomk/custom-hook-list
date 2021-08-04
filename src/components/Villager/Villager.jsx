import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Villager = ({ name, species, phrase, image, _id }) => (
  <Link to={`/${_id}`}>
    <figure>
      <img src={image} alt={name} />
      <figcaption>
        <p>{name}</p>
        <p>{species}</p>
        <p>{phrase}</p>
      </figcaption>
    </figure>
  </Link>
);

Villager.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  phrase: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Villager;
