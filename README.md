# SEO Rank Tracker

A full-stack SEO analysis and keyword rank-tracking platform. Analyze websites, track keyword rankings, monitor SEO performance over time, and review historical reports — all from a centralized dashboard.

![React](https://img.shields.io/badge/React-TypeScript-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen)
![Gemini](https://img.shields.io/badge/AI-Google%20Gemini-orange)

---

## 🌐 Live Application

| Service | URL |
|---|---|
| **Frontend (Live Demo)** | [seo-rank-tracker-chi.vercel.app](https://seo-rank-tracker-chi.vercel.app/) |
| **Backend API** | [seo-rank-tracker-server-9nsarspf7-pavan-5b3f.vercel.app](https://seo-rank-tracker-server-9nsarspf7-pavan-5b3f.vercel.app/) |

The frontend is deployed on Vercel and communicates with the deployed Node.js + Express backend via REST API.

---

## 📖 Overview

SEO Rank Tracker combines a **React + TypeScript** frontend with a **Node.js + Express** backend, **MongoDB Atlas** for persistent storage, automated keyword rank tracking via cron jobs, website scraping, and **Google Gemini** for AI-powered SEO analysis and recommendations.

---

## 🚀 Features

### 🔍 Website SEO Analysis
Generate a full SEO report for any website:
- URL and content extraction
- SEO-related metadata inspection
- Page-level analysis
- AI-assisted analysis via Google Gemini
- Structured, actionable recommendations
- Results saved for future reference

### 📈 Keyword Rank Tracking
- Add keywords to track per website
- Automated tracking via scheduled cron jobs
- Store and compare ranking results over time
- View full ranking history

### 📊 Dashboard
A centralized view of all SEO activity:
- SEO analysis results
- Tracked keywords and their rankings
- Recent activity
- Quick navigation to reports and history

### 📜 Analysis History
- Browse previously generated analyses (stored in MongoDB)
- Compare records across time
- Open any individual report

### 📄 SEO Reports
Structured reports covering observations, detected issues, recommendations, analysis results, and ranking data.

### 🤖 AI-Powered SEO Analysis
Google Gemini processes collected website data to generate SEO insights and recommendations. Isolated in [`server/services/geminiService.js`](server/services/geminiService.js).

### 🌐 Website Scraping
A dedicated service collects website data prior to analysis, keeping data collection separate from application logic. See [`server/services/scraperService.js`](server/services/scraperService.js).

### ⏰ Automated Rank Tracking
A scheduled cron job ([`server/cron/rankTrackingCron.js`](server/cron/rankTrackingCron.js)) keeps ranking data current without manual triggers.

---

## 🏗️ System Architecture

```
                    ┌─────────────────────┐
                    │        User          │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │  React + TypeScript  │
                    │       Frontend       │
                    └──────────┬───────────┘
                               │
                         HTTP / REST API
                               │
                               ▼
                    ┌─────────────────────┐
                    │  Node.js + Express   │
                    │        Backend       │
                    └──────────┬───────────┘
                               │
             ┌─────────────────┼─────────────────┐
             │                 │                 │
             ▼                 ▼                 ▼
      ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
      │   MongoDB   │   │  Gemini API │   │ Web Scraper │
      │    Atlas    │   │             │   │   Service   │
      └─────────────┘   └─────────────┘   └─────────────┘

                    ┌─────────────────────┐
                    │  Rank Tracking Cron  │
                    │      Scheduler       │
                    └─────────────────────┘
```

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React, TypeScript, Vite, CSS / UI components |
| **Backend** | Node.js, Express.js, REST APIs, Nodemon, node-cron |
| **Database** | MongoDB Atlas, Mongoose |
| **AI** | Google Gemini API |
| **Tooling** | Git, GitHub, VS Code, npm |

---

## 📁 Project Structure

```
SEO-Rank-Tracker/
│
├── Client/                          # React + TypeScript frontend
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Analyze.tsx          # Website SEO analysis
│   │   │   ├── Dashboard.tsx        # SEO dashboard
│   │   │   ├── History.tsx          # Previous analyses
│   │   │   └── Report.tsx           # SEO reports
│   │   └── ...
│   ├── package.json
│   └── ...
│
├── server/                          # Node.js + Express backend
│   ├── config/
│   │   └── db.js                    # MongoDB connection
│   ├── controllers/
│   │   └── analysisController.js    # Analysis business logic
│   ├── cron/
│   │   └── rankTrackingCron.js      # Automated rank tracking
│   ├── models/
│   │   └── Analysis.js              # MongoDB analysis model
│   ├── routes/
│   │   └── analysisRoutes.js        # Analysis API routes
│   ├── services/
│   │   ├── geminiService.js         # Gemini AI integration
│   │   └── scraperService.js        # Website scraping
│   ├── package.json
│   ├── package-lock.json
│   └── server.js                    # Express server entry point
│
├── .gitignore
└── README.md
```

---

## 🔄 Application Workflows

**SEO Analysis**

```
User enters URL → React Frontend → Express API → Scraper Service
   → Website Data → Gemini AI Analysis → SEO Results → MongoDB Atlas
   → Dashboard / Report
```

**Rank Tracking**

```
Website + Keywords → Rank Tracking Config → Scheduled Cron Job
   → Search / Ranking Collection → Ranking Results → MongoDB
   → Dashboard / History
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm
- Git
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account
- A [Google Gemini API key](https://ai.google.dev/)

Verify your Node.js and npm installation:

```bash
node --version
npm --version
```

### 1. Clone the repository

```bash
git clone https://github.com/pavankumarchoudari/SEO-Rank-Tracker.git
cd SEO-Rank-Tracker
```

### 2. Frontend setup

```bash
cd Client
npm install
npm run dev
```

The Vite dev server will be available at:

```
http://localhost:5173
```

### 3. Backend setup

Open a new terminal:

```bash
cd SEO-Rank-Tracker/server
npm install
```

Create a `.env` file inside `server/`:

```env
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
```

> ⚠️ Never commit `.env` to GitHub.

Start the backend:

```bash
npm run server
```

The backend will run at:

```
http://localhost:5000
```

---

## 🔐 Environment Variables

| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB Atlas connection string |
| `GEMINI_API_KEY` | Google Gemini API key |
| `PORT` | Backend server port |

Example:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/seo
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
```

Never expose API keys, database passwords, or other credentials in source code.

---

## 🔌 Backend API

REST endpoints are organized by:

```
Frontend → API Route → Controller → Service → Database / External API
```

- Routes: [`server/routes/analysisRoutes.js`](server/routes/analysisRoutes.js)
- Controllers: [`server/controllers/analysisController.js`](server/controllers/analysisController.js)

---

## 🗄️ Database

The application uses **MongoDB Atlas** as its cloud database, accessed via **Mongoose**. Connection logic lives in [`server/config/db.js`](server/config/db.js), kept separate from the application server. Analysis data is modeled in [`server/models/Analysis.js`](server/models/Analysis.js).

---

## ⏰ Rank Tracking Cron Job

Automated rank tracking runs on a schedule defined in [`server/cron/rankTrackingCron.js`](server/cron/rankTrackingCron.js), initialized automatically on server start.

Example startup output:

```
Rank tracking cron job scheduled
Server running on port 5000
MongoDB connected successfully
```

---

## 🧪 Development

Nodemon automatically restarts the backend on file changes:

```bash
npm run server
```

```
Edit Code → Save → Nodemon detects change → Server restarts
```

---

## 🚀 Deployment

The project is deployed as two independent services on **Vercel**:

- **Frontend:** [seo-rank-tracker-chi.vercel.app](https://seo-rank-tracker-chi.vercel.app/)
- **Backend:** [seo-rank-tracker-server-9nsarspf7-pavan-5b3f.vercel.app](https://seo-rank-tracker-server-9nsarspf7-pavan-5b3f.vercel.app/)
- **Database:** MongoDB Atlas (production)

### Production Architecture

```
                          Internet
                             │
                ┌────────────┴────────────┐
                │                         │
                ▼                         ▼
         ┌────────────┐           ┌───────────────┐
         │   Vercel   │──────────▶│    Backend     │
         │  Frontend  │           │ Node / Express │
         └────────────┘           └────────┬───────┘
                                            │
                       ┌────────────────────┼────────────────────┐
                       │                    │                    │
                       ▼                    ▼                    ▼
                ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
                │ MongoDB Atlas│    │  Gemini API  │    │   Scraper    │
                └──────────────┘    └──────────────┘    └──────────────┘
```

---

## 🔒 Security

- Never commit `.env` files
- Never hardcode API keys or credentials
- Never expose MongoDB credentials or connection strings in logs
- Store production secrets in the hosting platform's environment variables
- Configure appropriate MongoDB Atlas network-access rules
- Rotate credentials immediately if they are ever exposed

`.gitignore` should include:

```
node_modules/
.env
server/.env
Client/.env
```

---

## 🐛 Troubleshooting

<details>
<summary><strong>MongoDB connection error</strong></summary>

- Verify `MONGODB_URI` is correct
- Confirm the MongoDB Atlas cluster is running
- Check Atlas Network Access rules
- Verify the database user's credentials
- Check network/DNS connectivity
- Restart the backend
</details>

<details>
<summary><strong>Port already in use</strong></summary>

Stop the process using the port, or change `PORT` in your `.env` file to an available port.
</details>

<details>
<summary><strong>Frontend cannot connect to backend</strong></summary>

- Confirm the backend is running
- Verify the backend URL used by the frontend
- Confirm API routes match frontend requests
- Check CORS configuration allows the frontend origin
- Verify production environment variables are set correctly
</details>

---

## 📌 Project Status

- [x] React + TypeScript frontend
- [x] Node.js + Express backend
- [x] MongoDB Atlas integration
- [x] SEO analysis workflow
- [x] Website scraping service
- [x] Gemini AI service
- [x] SEO analysis persistence
- [x] Dashboard
- [x] Analysis history
- [x] SEO reports
- [x] Keyword rank tracking
- [x] Automated rank-tracking cron job
- [x] Deployed as a live web application

---

## 👨‍💻 Author

**Pavan Kumar Choudari**

- GitHub: [@pavankumarchoudari](https://github.com/pavankumarchoudari)
- Repository: [SEO-Rank-Tracker](https://github.com/pavankumarchoudari/SEO-Rank-Tracker)
