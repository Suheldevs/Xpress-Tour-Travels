const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors({
    origin: ['https://www.xpresstourtravels.com/','https://xpresstourtravels.com/','http://localhost:3000'], 
    credentials: true
}));
app.use(cookieParser());

const FILE_PATH = path.join(__dirname, 'visitor.json');


let visitors = new Set();
if (fs.existsSync(FILE_PATH)) {
    try {
        const data = JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'));
        visitors = new Set(data.uniqueVisitors || []);
    } catch (error) {
        console.error("Error reading visitor file:", error);
        fs.writeFileSync(FILE_PATH, JSON.stringify({ uniqueVisitors: [] }));
    }
}

app.get('/visitor-count', (req, res) => {
    let visitorId = req.cookies.visitor_id;

    if (!visitorId) {
        visitorId = uuidv4();
        res.cookie('visitor_id', visitorId, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'Lax' }); 
        visitors.add(visitorId);

        fs.writeFileSync(FILE_PATH, JSON.stringify({ uniqueVisitors: Array.from(visitors) }));
    }

    res.json({ totalVisitors: visitors.size });
});

app.listen(3001, () => console.log("Server running on port 3001"));
