import { Context } from '@azure/functions';
import * as data from './data';

async function getHeroes({ req, res }: Context) {
  try {
    const heroes = data.getHeroes();
    res.status(200).json(heroes);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function postHero({ req, res }: Context) {
  const hero = {
    id: undefined,
    name: req.body.name,
    description: req.body.description
  };

  try {
    const newHero = data.addHero(hero);
    res.status(201).json(newHero);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function putHero({ req, res }: Context) {
  const hero = {
    id: req.params.id,
    name: req.body.name,
    description: req.body.description
  };

  try {
    const updatedHero = data.updateHero(hero);
    res.status(200).json(updatedHero);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteHero({ req, res }: Context) {
  const { id } = req.params;

  try {
    data.deleteHero(id);
    res.status(200).json({});
  } catch (error) {
    res.status(500).send(error);
  }
}

export default { getHeroes, postHero, putHero, deleteHero };
