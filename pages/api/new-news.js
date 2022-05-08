import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect("");
    const db = client.db();
    const newsCollection = db.collection("news");

    await newsCollection.insertOne(data);
    client.close();

    res.status(201).json({ message: "News inserted!" });
  }
};

export default handler;
