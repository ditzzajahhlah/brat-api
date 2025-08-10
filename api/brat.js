import axios from "axios";

export default async function handler(req, res) {
    const { text } = req.query;

    if (!text) {
        return res.status(400).json({ error: "Parameter 'text' wajib diisi" });
    }

    try {
        const response = await axios.get(
            `https://bratgenerator.com/api?text=${encodeURIComponent(text)}`,
            { responseType: "arraybuffer" }
        );

        res.setHeader("Content-Type", "image/png");
        res.send(Buffer.from(response.data, "binary"));
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Gagal mengambil gambar" });
    }
}
