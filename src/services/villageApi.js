export const fetchVillagers = async (page) => {
  const res = await fetch(
    'https://ac-vill.herokuapp.com/villagers?perPage=100'
  );
  const villagers = await res.json();

  return villagers.slice((page - 1) * 10, page * 10);
};

export const fetchVillager = async (_id) => {
  const res = await fetch(`https://ac-vill.herokuapp.com/villagers/${_id}`);

  return res.json();
};
