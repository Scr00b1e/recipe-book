import { NextApiRequest, NextApiResponse } from 'next';
import { brItems } from '../brItems';
// brItems === breakfastItems!

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const customerId = req.query.customerId
    const result = await (customerId)
    res.status(200).json(result)
}