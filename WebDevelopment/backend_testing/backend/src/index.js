import express from 'express';
import http from 'http';

const app = express();

app.get('/sum', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ message: 'Invalid query parameters. Ensure "a" and "b" are numbers.' });
    }

    const sum = a + b;
    res.json({ sum });
});

const PORT = 8000;
const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});

export { httpServer };