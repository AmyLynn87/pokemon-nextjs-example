// api/new-pokemon
// POST api/new-pokemon

//Libs
import { connectToDB } from '@/database';

//Local

import { NextApiRequest, NextApiResponse } from "next/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await connectToDB();

    const db = client.db();

    const pokedexCollection = db.collection('pokedex');

    const result = await pokedexCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: `${data.name} is inserted in the Database` })
  }
}