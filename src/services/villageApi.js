export const fetchVillagers = async (page) => {
  const res = await fetch(
    'https://ac-vill.herokuapp.com/villagers?perPage=100'
  );
  const { results } = await res.json();

  return results.slice((page - 1) * 10, page * 10);
};

export const fetchVillager = async (_id) => {
  const res = await fetch(`https://ac-vill.herokuapp.com/villagers/${_id}`);

  return res.json();
};
