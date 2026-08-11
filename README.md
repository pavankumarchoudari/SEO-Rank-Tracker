# SEO Rank Tracker

A full-stack SEO analysis and keyword rank-tracking platform that helps users analyze websites, track keyword rankings, monitor SEO performance over time, and view historical reports from a centralized dashboard.

The application combines a **React + TypeScript frontend** with a **Node.js + Express backend**, **MongoDB Atlas** for persistent storage, automated rank tracking, website scraping, and **Google Gemini** for AI-powered SEO analysis.

---

## 🚀 Features

### 🔍 Website SEO Analysis

Analyze a website and generate an SEO report based on information collected from the target webpage.

The analysis workflow includes:

* Website URL analysis
* Website content extraction
* SEO-related metadata inspection
* Page-level analysis
* AI-assisted analysis using Google Gemini
* Structured SEO recommendations
* Saving analysis results for future reference

---

### 📈 Keyword Rank Tracking

Track the search-engine ranking position of keywords associated with a website.

Features include:

* Add keywords for tracking
* Track keyword positions
* Store ranking results
* Automatically execute rank-tracking jobs
* Compare ranking information over time
* View ranking history
* Monitor SEO performance from the dashboard

The backend includes a scheduled rank-tracking cron job for automated tracking.

---

### 📊 Dashboard

The dashboard provides a centralized view of SEO activity and analysis results.

It can be used to:

* View SEO analysis results
* Monitor tracked keywords
* Review ranking information
* Access recent activity
* Navigate to reports and historical results

---

### 📜 Analysis History

Previously generated SEO analyses are stored in MongoDB and can be accessed through the history section.

Users can:

* View previous analyses
* Review saved SEO results
* Compare previous analysis records
* Open individual reports

---

### 📄 SEO Reports

The application provides structured reports for analyzed websites.

Reports are designed to make SEO findings easier to understand by organizing:

* SEO observations
* Detected issues
* Recommendations
* Analysis results
* Ranking information

---

### 🤖 AI-Powered SEO Analysis

Google Gemini is integrated into the backend to provide AI-assisted SEO analysis.

The Gemini service processes collected website information and generates useful SEO insights and recommendations.

The AI integration is isolated inside:

```text
server/services/geminiService.js
```

---

### 🌐 Website Scraping

The backend contains a dedicated scraping service responsible for collecting information from websites before performing SEO analysis.

The scraping functionality is organized inside:

```text
server/services/scraperService.js
```

This keeps website data collection separate from the rest of the application logic.

---

### ⏰ Automated Rank Tracking

The backend includes a scheduled cron job:

```text
server/cron/rankTrackingCron.js
```

The cron job automatically performs rank-tracking operations according to the configured schedule.

This allows ranking information to be updated without manually triggering every tracking operation.

---

## 🏗️ System Architecture

The application follows a client-server architecture:

```text
                    ┌─────────────────────┐
                    │       User          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ React + TypeScript  │
                    │      Frontend       │
                    └──────────┬──────────┘
                               │
                         HTTP / REST API
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Node.js + Express   │
                    │       Backend       │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
       ┌─────────────┐  ┌──────────────┐  ┌─────────────┐
       │   MongoDB   │  │ Gemini API    │  │ Web Scraper │
       │    Atlas    │  │              │  │   Service   │
       └─────────────┘  └──────────────┘  └─────────────┘
                              
                    ┌─────────────────────┐
                    │ Rank Tracking Cron  │
                    │      Scheduler      │
                    └─────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* Vite
* CSS / UI components

### Backend

* Node.js
* Express.js
* JavaScript
* REST APIs
* Nodemon
* Node Cron

### Database

* MongoDB Atlas
* Mongoose

### AI

* Google Gemini API

### Development Tools

* Git
* GitHub
* VS Code
* npm

---

## 📁 Project Structure

```text
SEO-Rank-Tracker/
│
├── Client/
│   │
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Analyze.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── History.tsx
│   │   │   └── Report.tsx
│   │   │
│   │   └── ...
│   │
│   ├── package.json
│   └── ...
│
├── server/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── analysisController.js
│   │
│   ├── cron/
│   │   └── rankTrackingCron.js
│   │
│   ├── models/
│   │   └── Analysis.js
│   │
│   ├── routes/
│   │   └── analysisRoutes.js
│   │
│   ├── services/
│   │   ├── geminiService.js
│   │   └── scraperService.js
│   │
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── .gitignore
└── README.md
```

---

## 🔄 Application Workflow

### SEO Analysis Workflow

```text
User enters website URL
        │
        ▼
React Frontend
        │
        ▼
Express REST API
        │
        ▼
Scraper Service
        │
        ▼
Website Data
        │
        ▼
Gemini AI Analysis
        │
        ▼
SEO Results
        │
        ▼
MongoDB Atlas
        │
        ▼
Dashboard / Report
```

---

### Rank Tracking Workflow

```text
Website + Keywords
        │
        ▼
Rank Tracking Configuration
        │
        ▼
Scheduled Cron Job
        │
        ▼
Search / Ranking Collection
        │
        ▼
Ranking Results
        │
        ▼
MongoDB
        │
        ▼
Dashboard / History
```

---

# ⚙️ Getting Started

## Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Git
* MongoDB Atlas account
* Google Gemini API key

You can verify Node.js and npm using:

```bash
node --version
npm --version
```

---

## 📥 Clone the Repository

```bash
git clone https://github.com/pavankumarchoudari/SEO-Rank-Tracker.git
```

Move into the project:

```bash
cd SEO-Rank-Tracker
```

---

# 🖥️ Frontend Setup

Move into the client directory:

```bash
cd Client
```

Install dependencies:

```bash
npm install
```

Start the frontend development server:

```bash
npm run dev
```

The Vite development server will provide a local URL, usually similar to:

```text
http://localhost:5173
```

---

# ⚙️ Backend Setup

Open another terminal and navigate to the server:

```bash
cd SEO-Rank-Tracker/server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `server` directory:

```text
server/
└── .env
```

Add your environment variables:

```env
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
```

> Do not commit `.env` to GitHub.

Start the backend:

```bash
npm run server
```

The backend runs on:

```text
http://localhost:5000
```

---

# 🔐 Environment Variables

The backend uses environment variables for sensitive configuration.

Example:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/seo
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
```

### Environment Variable Description

| Variable         | Description                     |
| ---------------- | ------------------------------- |
| `MONGODB_URI`    | MongoDB Atlas connection string |
| `GEMINI_API_KEY` | Google Gemini API key           |
| `PORT`           | Backend server port             |

Never expose API keys, database passwords, or other credentials in source code.

---

# 🔌 Backend API

The backend exposes REST API endpoints that are consumed by the React frontend.

The analysis routes are organized in:

```text
server/routes/analysisRoutes.js
```

Business logic for analysis is handled by:

```text
server/controllers/analysisController.js
```

The application follows the general request flow:

```text
Frontend
   ↓
API Route
   ↓
Controller
   ↓
Service
   ↓
Database / External API
```

---

# 🗄️ Database

The application uses **MongoDB Atlas** as its cloud database.

Mongoose is used to interact with MongoDB from the Node.js backend.

Database connection logic is maintained separately from the application server.

The project stores analysis-related information through models such as:

```text
server/models/Analysis.js
```

---

# ⏰ Rank Tracking Cron Job

Automated rank tracking is implemented using a scheduled cron job.

The scheduler is located at:

```text
server/cron/rankTrackingCron.js
```

When the backend starts, the scheduled rank-tracking process is initialized.

Example server output:

```text
Rank tracking cron job scheduled
Server running on port 5000
MongoDB connected successfully
```

---

# 🧪 Development

During development, Nodemon is used to automatically restart the backend whenever server-side files change.

Run:

```bash
npm run server
```

The development workflow is:

```text
Edit Code
   ↓
Save
   ↓
Nodemon detects change
   ↓
Server restarts
```

---

# 🚀 Deployment

The project is designed to be deployed as separate frontend and backend services.

### Frontend

The React/Vite application can be deployed using platforms such as:

* Vercel

### Backend

The Node.js/Express API requires a backend hosting environment capable of running the server continuously and supporting the application's scheduled tasks.

### Database

MongoDB Atlas is used as the production database.

---

## 🌍 Production Architecture

```text
                    Internet
                       │
             ┌─────────┴─────────┐
             │                   │
             ▼                   ▼
       ┌───────────┐       ┌──────────────┐
       │  Vercel   │       │   Backend    │
       │ Frontend  │──────▶│ Node/Express │
       └───────────┘       └───────┬──────┘
                                   │
                    ┌──────────────┼──────────────┐
                    │              │              │
                    ▼              ▼              ▼
              ┌──────────┐  ┌────────────┐  ┌──────────┐
              │ MongoDB  │  │ Gemini API │  │ Scraper  │
              │  Atlas   │  │            │  │          │
              └──────────┘  └────────────┘  └──────────┘
```

---

# 🔒 Security

Before deploying the application:

* Never commit `.env`
* Never hardcode API keys
* Never expose MongoDB credentials
* Never print database connection strings in production logs
* Store production secrets in the hosting platform's environment variables
* Use appropriate MongoDB Atlas network-access rules
* Rotate credentials immediately if they are accidentally exposed

Example `.gitignore`:

```gitignore
node_modules/
.env
server/.env
Client/.env
```

---

# 🐛 Troubleshooting

### MongoDB connection error

If MongoDB cannot connect:

1. Verify `MONGODB_URI`
2. Check that the MongoDB Atlas cluster is running
3. Check Atlas Network Access
4. Verify the database user's username and password
5. Check the network/DNS connection
6. Restart the backend

### Port already in use

If port `5000` is already being used, stop the existing process or change:

```env
PORT=5000
```

to another available port.

### Frontend cannot connect to backend

Check that:

* Backend is running
* Backend URL is correct
* API routes match the frontend requests
* CORS configuration allows the frontend origin
* Production environment variables are configured correctly

---

# 📌 Current Project Status

The project currently includes:

* React + TypeScript frontend
* Node.js + Express backend
* MongoDB Atlas integration
* SEO analysis workflow
* Website scraping service
* Gemini AI service
* SEO analysis persistence
* Dashboard
* Analysis history
* SEO reports
* Keyword rank tracking
* Automated rank-tracking cron job

The project is actively being developed and prepared for deployment.

---

# 👨‍💻 Author

**Pavan Kumar Choudari**

GitHub:

https://github.com/pavankumarchoudari

Repository:

https://github.com/pavankumarchoudari/SEO-Rank-Tracker
