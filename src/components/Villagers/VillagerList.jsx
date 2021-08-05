import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useVillagers } from '../../state/customHooks';
import Villager from './Villager';

const VillagerList = () => {
  const [page, setPage] = useState(1);
  const { villagers, loading } = useVillagers(page);
  if(loading) return <h1>Loading...</h1>;

  const villagerElements = villagers.map((villager) => (
    <li key={villager._id}>
      <Link to={`/${villager._id}`}>
        <Villager {...villager} />
      </Link>
    </li>
  ));

  return (
    <>
      <button 
        disabled={page <= 1}
        onClick={() => setPage((prevPage) => prevPage -1)}>
                &lt;
      </button> 
      {page}
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>&gt;</button>
      <ul>{villagerElements}</ul>
    </>
  );

};

export default VillagerList;
