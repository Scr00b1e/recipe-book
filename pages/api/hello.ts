import { NextApiRequest, NextApiResponse } from 'next';
import { fastNquick } from './data/fastNquick';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(fastNquick)
}
