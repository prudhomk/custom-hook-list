import React from 'react';
import { useParams } from 'react-router-dom';
import { useVillager } from '../../state/villager';

const VillagerDetails = () => {
  const { id } = useParams();
  const villager = useVillager(id);
  if(!villager) return <h1>Loading...</h1>;

  return (
    <section>
      <h2>Villager Details</h2>
      <dl>
        <dt>Name</dt>
        <dd>{villager.name}</dd>

        <dt>Status</dt>
        <dd>{villager.status}</dd>

        <dt>Image</dt>
        <dd>
          <img src={villager.image} alt={villager.name}/>
        </dd>
      </dl>
    </section>
  );
};

export default VillagerDetails;
