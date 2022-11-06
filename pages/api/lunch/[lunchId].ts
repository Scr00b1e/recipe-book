import { NextApiRequest, NextApiResponse } from "next";
import { Lunch } from "./Lunch";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { lunchId } = req.query
    const item = Lunch.find((lunch) => lunch.id === lunchId)
    res.status(200).json({item})
  }