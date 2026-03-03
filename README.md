# ⚡️ LLM Prompt JSON Generator (prompt-to-json)

A blazing-fast, browser-based utility built to eliminate the friction of manually formatting JSON payloads for LLM APIs.

If you frequently test prompts or integrate AI into your applications, manually escaping quotes and structuring JSON is a time-sink. This lightweight tool takes a System Prompt and a User Prompt and instantly outputs a valid, perfectly formatted, and copy-paste-ready JSON object.

## ✨ Features

- **Live Updating:** No submit buttons. The JSON payload updates in real-time as you type.
- **Smart Formatting:** Leaves out the `"systemPrompt"` key entirely if you leave the field blank.
- **One-Click Copy:** Native clipboard integration grabs the exact stringified JSON for instant pasting into your API testing tool or codebase.
- **Zero Storage:** Everything happens locally in your browser. No prompts are saved or sent to any backend.

## 🛠 Tech Stack

- **Core:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** CSS / Tailwind (Adjust as needed)

## 🚀 Getting Started

To run this project locally, make sure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

### 1. Clone the repository

```bash
git clone [https://github.com/ajosephr/prompt-to-json.git](https://github.com/ajosephr/prompt-to-json.git)
cd prompt-to-json
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Start the development server

```bash
npm run dev
```

Open your browser and navigate to the `localhost` URL provided in your terminal (usually http://localhost:5173) to see the app running.

## 💡 Usage

1. Paste or type your context into the System Prompt box (optional).
2. Type your main instruction into the User Prompt box (mandatory).
3. Watch the perfectly formatted JSON appear on the right.
4. Click Copy and paste it wherever you need it!
