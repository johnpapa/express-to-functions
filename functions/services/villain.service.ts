import { Context } from '@azure/functions';
import * as data from './data';

async function getVillains({ req, res }: Context) {
  try {
    const villains = data.getVillains();
    res.status(200).json(villains);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function postVillain({ req, res }: Context) {
  const villain = {
    name: req.body.name,
    description: req.body.description,
    id: undefined
  };

  try {
    const newVillain = data.addVillain(villain);
    res.status(201).json(newVillain);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function putVillain({ req, res }: Context) {
  const villain = {
    id: req.params.id,
    name: req.body.name,
    description: req.body.description
  };

  try {
    const udpatedVillain = data.updateVillain(villain);
    res.status(200).json(udpatedVillain);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteVillain({ req, res }: Context) {
  const { id } = req.params;

  try {
    data.deleteVillain(id);
    res.status(200).json({});
  } catch (error) {
    res.status(500).send(error);
  }
}

export default { getVillains, postVillain, putVillain, deleteVillain };
