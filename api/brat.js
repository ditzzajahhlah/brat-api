import axios from "axios";

export default async function handler(req, res) {
    const { key, text } = req.query;

    const MY_API_KEY = process.env.MY_API_KEY; 

    if (key !== MY_API_KEY) {
        return res.status(403).json({ error: "API key salah!" });
    }

    if (!text) {
        return res.status(400).json({ error: "Parameter 'text' wajib diisi" });
    }

    try {
        const response = await axios.get(
            `https://bratgenerator.com/api?text=${encodeURIComponent(text)}`,
            { responseType: "arraybuffer" }
        );

        res.setHeader("Content-Type", "image/png");
        res.send(response.data);
    } catch (error) {
        res.status(500).json({ error: "Gagal mengambil gambar" });
    }
}
