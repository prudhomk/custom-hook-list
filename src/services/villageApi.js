export const fetchVillagers = async (page) => {
  const res = await fetch(
    `https://ac-vill.herokuapp.com/villagers?perPage=${page}`
  );
  const { results } = await res.json();

  return results;
};

export const fetchVillager = async (_id) => {
  const res = await fetch(`https://ac-vill.herokuapp.com/villagers/${_id}`);

  return res.json();
};
