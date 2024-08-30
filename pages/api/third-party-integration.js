import axios from 'axios';
// Example of integrating a third-party API
export default async function handler(req, res) {
  if (req.method === 'GET') {
    const response = await axios.get('https://api.example.com/data');
    res.status(200).json(response.data);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}