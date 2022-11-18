import { NextApiRequest, NextApiResponse } from "next";
import { brItems } from "./brItems";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { brId } = req.query
    const item = brItems.find((br) => br.id === brId)
    res.status(200).json({item})
  }