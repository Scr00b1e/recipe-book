import { NextApiRequest, NextApiResponse } from 'next';
import { Lunch } from './Lunch';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'GET') {
    res.status(200).json(Lunch)
  }
}