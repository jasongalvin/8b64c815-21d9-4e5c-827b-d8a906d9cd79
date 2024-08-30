import { db } from '../../../utils/db';
// Function to handle user login
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    // Implement login logic and JWT token generation
    const token = await db.loginUser(email, password);
    res.status(200).json({ token });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}