export default function handler(req, res) {
  const { text } = req.query;

  if (!text) {
    return res.status(400).json({ error: "Masukkan parameter text" });
  }

  res.status(200).json({
    result: `Brat: ${text}`
  });
}
