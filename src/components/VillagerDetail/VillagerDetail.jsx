import React from 'react';
import { useParams } from 'react-router-dom';
import { useVillager } from '../../state/customHooks';


const VillagerDetails = () => {
  const { _id } = useParams();
  const villager = useVillager(_id);
  if(!villager) return <h1>Loading...</h1>;
  
  return (
    <section>
      <h2>Villager Details</h2>
      <dl data-testid="1">
        <dt>Name</dt>
        <dd>{villager.name}</dd>

        <dt>Japanese Name</dt>
        <dd>{villager.japaneseName}</dd>

        <dt>Photo</dt>
        <dd>
          <img src={villager.image} alt={villager.name}/>
        </dd>

        <dt>Species</dt>
        <dd>{villager.species}</dd>

        <dt>Phrase</dt>
        <dd>{villager.phrase}</dd>

        <dt>Quote</dt>
        <dd>{villager.quote}</dd>

        <dt>Skill</dt>
        <dd>{villager.skill}</dd>

        <dt>Personality</dt>
        <dd>{villager.personality}</dd>
      </dl>
    </section>
  );
};

export default VillagerDetails;
