import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Parse incoming JSON payloads
app.use(express.json());

// The route Slack will ping for verification
app.post('/slack/events', (req, res) => {
    // Check for the URL verification challenge
    if (req.body.type === 'url_verification') {
        // Respond instantly with the challenge token
        return res.status(200).send(req.body.challenge);
    }

    // Your future app logic will go here
    res.status(200).end();
});

app.listen(PORT, () => {
    console.log(`Server running in ESM mode on port ${PORT}`);
});