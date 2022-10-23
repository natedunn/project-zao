export default async function handler(req, res) {
  const { key } = req.body;

  if (key !== 'xDj8Kln84D') {
    res.status(403).json({
      message: 'Invalid API key',
      valid: false,
    });
  }
  res.status(200).json({
    message: 'Valid API key',
    valid: true,
  });
}
