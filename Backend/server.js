const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cors({
    origin: ['https://www.xpresstourtravels.com', 'https://xpresstourtravels.com', 'http://localhost:3000', 'http://localhost:5173', 'https://expresstourdemo.netlify.app', 'https://expresstourdemo.netlify.app/'],
    credentials: true
}));
app.use(cookieParser());

const FILE_PATH = path.join(__dirname, 'visitor_count.json');


let visitorCount = 0;

if (fs.existsSync(FILE_PATH)) {
    try {
        const data = JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'));
        visitorCount = data.count || 0;
    } catch (error) {
        console.error("Error reading visitor count file:", error);
        fs.writeFileSync(FILE_PATH, JSON.stringify({ count: 0 }));
    }
}

app.get('/visitor-count', (req, res) => {
    if (!req.cookies.visitor_id) {
        res.cookie('visitor_id', 'visited', {
            maxAge: 24 * 60 * 60 * 1000, httpOnly: false,
            sameSite: 'None',
            secure: true
        });

        visitorCount++;
        fs.writeFileSync(FILE_PATH, JSON.stringify({ count: visitorCount }));
    }

    res.json({ totalVisitors: visitorCount });
});

app.listen(3001, () => console.log("Server running on port 3001"));
