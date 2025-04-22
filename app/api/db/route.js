import clientPromise from "@/app/lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise
    const db = client.db('myDatabase')

    const data = await db.collection('myCollection').find({}).toArray()
    res.status(200).json({ success: true, data })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}