import { NextApiRequest, NextApiResponse } from 'next';
import { brItems } from './brItems';
// brItems === breakfastItems!

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'GET') {
    res.status(200).json(brItems)
  }
}