# PortfolioAgent (Slack AI Agent)

An intelligent, autonomous Web3 workspace assistant built for the Slack Agent Builder Challenge. `PortfolioAgent` converts natural language messages inside Slack channels into automated portfolio actions—querying blockchain networks, tracking token balances, managing databases, and rendering interactive, responsive user interfaces.

---

## How It Works

The agent handles requests asynchronously through an agentic loop divided into four distinct phases:


```

[User Message] ──> (1. The Trigger) ──> (2. The Mind: LLM)
│
▼
[Slack UI]    <── (4. Final Value)  <── (3. The Action: JS Backend)

```

1. **The Trigger:** A user mentions the bot in a Slack channel with a natural language command (e.g., `@PortfolioAgent, check my wallet and add 5 CSPR to my profile tracker`).
2. **The Mind (LLM):** The `@slack/bolt` framework passes the text payload to a large language model (LLM). The AI parses the plain English text to identify user intent and extract critical parameters (e.g., token type, amount, wallet addresses).
3. **The Actions (Tools):** The LLM dynamically selects and executes the appropriate backend JavaScript function (Tool). The backend interacts with the blockchain network (Casper Network), retrieves live node data, and updates the transactional state securely inside the database.
4. **The Final Value:** The backend returns an orchestrated layout block. The AI responds inside the Slack channel using **Slack Block Kit** JSON, rendering an interactive, responsive confirmation card.

---

##️ Tech Stack & Architecture

* **Framework:** Next.js (App Router / Client-Server Hybrid Architecture)
* **Slack Integration:** `@slack/bolt` (Slack Events API, Webhooks, and Block Kit interactive UI)
* **AI Orchestration:** Tool-calling LLM engine (OpenAI / Claude integration via Slack Agent toolkit)
* **Blockchain Layer:** Casper Network JS SDK (On-chain state tracking, block telemetry, balance verification)
* **Database & Auth:** Secure transactional database layer combined with Clerk authentication state handlers
* **Tunneling & Testing:** `ngrok` secure proxy tunneling for routing Slack webhook triggers directly to the cloud development environment

---

## � Installation & Setup

Follow these steps to spin up the agent workspace inside your environment (e.g., GitHub Codespaces):

### 1. Project Initialization
Clone the repository and restore the foundational workspace dependencies:
```bash
npm install

```

### 2. Environment Configurations

Create a `.env` file in your root directory and map the necessary security tokens:

```env
SLACK_SIGNING_SECRET=your_slack_signing_secret
SLACK_BOT_TOKEN=xoxb-your-bot-token
CLERK_SECRET_KEY=your_clerk_secret
DATABASE_URL=your_database_connection_string

```

### 3. Establish the Webhook Tunnel

Expose your local development port to the public internet so Slack can route events to your agent:

```bash
# Set up your ngrok authtoken (Run once)
ngrok config add-authtoken YOUR_NGROK_AUTH_TOKEN

# Fire up the HTTP tunnel proxy
ngrok http 3000

```

*Copy the secure HTTPS URL provided by ngrok (e.g., `https://xxxx.ngrok-free.app`) and paste it into your Slack Event Subscriptions Redirect URL dashboard.*

### 4. Run the Agent

Boot up the concurrent development runtime:

```bash
npm run dev

```

---

## Design System (Mobile-First Philosophy)

The interactive blocks returned to the Slack interface utilize a responsive, card-based structural design pattern. Whether accessed via Slack's desktop application or through a mobile interface, components automatically stack linearly to prioritize instant visibility of high-value actions:

* Primary visual focal point centers on structural global total balances.
* Actionable buttons (`Send`, `Receive`, `Track`) are padded and optimized for clean touch targets on mobile viewports.

```

```