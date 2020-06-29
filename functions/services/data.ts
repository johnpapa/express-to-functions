const data = {
  heroes: [
    {
      id: '10',
      name: 'Ella',
      description: 'fashionista'
    },
    {
      id: '20',
      name: 'Madelyn',
      description: 'the cat whisperer'
    },
    {
      id: '30',
      name: 'Haley',
      description: 'pen wielder'
    },
    {
      id: '40',
      name: 'Landon',
      description: 'arc trooper'
    }
  ],
  villains: [
    {
      id: '10',
      name: 'Malcolm',
      description: `I don't believe there is a power in the verse that can stop Kaylee from being cheerful.`
    },
    {
      id: '20',
      name: 'Kaylee',
      description: `No power in the 'verse can stop me.`
    },
    {
      id: '30',
      name: 'Hoban',
      description: `I don't mean to alarm anybody, but I think we're being followed.`
    },
    {
      id: '40',
      name: 'Zoë',
      description: `First rule of battle, little one ... don't ever let them know where you are.`
    },
    {
      id: '50',
      name: 'Inara',
      description: `It wasn't entirely a disaster`
    },
    {
      id: '60',
      name: 'Simon',
      description: 'This must be what going mad feels like.'
    },
    {
      id: '70',
      name: 'Shepherd',
      description: 'Oh, I got heathens aplenty right here.'
    },
    {
      id: '80',
      name: 'River',
      description: 'Call me if anyone interesting shows up'
    },
    {
      id: '90',
      name: 'Jayne',
      description: `Ten percent of nothin' is ... let me do the math here ... nothin' into nothin' ... carry the nothin'`
    }
  ]
};

const addHero = hero => {
  hero.id = `Hero${hero.name}`;
  data.heroes.push(hero);
  return hero;
};

const updateHero = hero => {
  const index = data.heroes.findIndex(h => h.id === hero.id);
  data.heroes.splice(index, 1, hero);
  return hero;
};

const deleteHero = id => {
  data.heroes = data.heroes.filter(h => h.id !== id);
  return true;
};

const getHeroes = () => {
  return data.heroes;
};

const addVillain = villain => {
  villain.id = `Villain${villain.name}`;
  return data.villains.push(villain);
  return villain;
};

const updateVillain = villain => {
  const index = data.villains.findIndex(h => h.id === villain.id);
  data.villains.splice(index, 1, villain);
  return villain;
};

const deleteVillain = id => {
  data.villains = data.villains.filter(h => h.id !== id);
  return true;
};

const getVillains = () => {
  return data.villains;
};

export {
  addHero,
  updateHero,
  deleteHero,
  getHeroes,
  addVillain,
  updateVillain,
  deleteVillain,
  getVillains
};
