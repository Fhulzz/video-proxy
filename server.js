const express = require("express");
const request = require("request");

const app = express();

app.get("/play", (req, res) => {
    const videoId = req.query.id;

    if (!videoId) {
        return res.status(400).send("Missing video ID");
    }

    const videoUrl = `https://abyssplay.pages.dev/?id=${videoId}`;
    
    const options = {
        url: videoUrl,
        headers: {
            "Referer": "https://abysscdn.com"
        }
    };

    request(options).pipe(res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
