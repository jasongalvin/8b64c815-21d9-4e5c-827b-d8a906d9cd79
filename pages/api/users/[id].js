import { db } from '../../../utils/db';
// Function to get user information by ID
export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === 'GET') {
    const user = await db.getUserById(id);
    res.status(200).json(user);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}