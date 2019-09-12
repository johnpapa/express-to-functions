import { Request, Response } from 'express';
import * as data from './data';

async function getVillains(req: Request, res: Response) {
  try {
    const villains = data.getVillains();
    res.status(200).json(villains);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function postVillain(req: Request, res: Response) {
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

async function putVillain(req: Request, res: Response) {
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

async function deleteVillain(req: Request, res: Response) {
  const { id } = req.params;

  try {
    data.deleteVillain(id);
    res.status(200).json({});
  } catch (error) {
    res.status(500).send(error);
  }
}

export default { getVillains, postVillain, putVillain, deleteVillain };
