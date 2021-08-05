import { useEffect, useState } from 'react';
import { fetchVillager, fetchVillagers } from '../services/villageApi';

export const useVillagers = (page) => {
  const [loading, setLoading] = useState(true);
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    fetchVillagers(page)
      .then(setVillagers)
      .finally(() => setLoading(false));
  }, [page]);

  return { villagers, loading };
};

export const useVillager = (id) => {
  const [villager, setVillager] = useState(null);

  useEffect(() => {
    fetchVillager(id).then(setVillager);
  }, []);

  return villager;
};
