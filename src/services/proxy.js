export default async function handler(req, res) {
  const { path } = req.query;
  const apiUrl = `https://api.audiomack.com/v1/${path}`;
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Proxy error' });
  }
}