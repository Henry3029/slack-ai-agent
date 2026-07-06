import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// This middleware is REQUIRED so Express can read the JSON payload shown in your screenshot
app.use(express.json());

// Match the exact path Slack is hitting (/api/slack/events)
app.post('/api/slack/events', (req, res) => {
    
    // 1. Log the incoming body to your terminal so you can see it working!
    console.log("Received from Slack:", req.body);

    // 2. Check if this is Slack's URL verification handshake
    if (req.body && req.body.type === 'url_verification') {
        // 3. Extract the challenge and send it back as plain text (as Slack requests)
        return res.status(200).send(req.body.challenge);
    }

    // Handle other Slack events here later (like app_mention, message, etc.)
    
    // Always return a 200 OK to other events so Slack doesn't retry
    res.status(200).end();
});

app.listen(PORT, () => {
    console.log(`Backend listening on port ${PORT}`);
});