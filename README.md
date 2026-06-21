# AnthroCarbon – Smart Carbon Footprint Tracker & Sustainability Assistant (MERN Stack)

AnthroCarbon is a premium, full-stack MERN web application designed to help individuals calculate, analyze, monitor, and reduce their daily carbon footprint. 

Unlike basic carbon calculators, AnthroCarbon operates as an intelligent sustainability assistant, evaluating user lifestyle choices (commutes, energy consumption, diet, and waste) to offer personalized recommendations, visual analytics, goal-tracking metrics, and interactive daily eco-challenges. All calculations and targets are calculated on a Node.js/Express backend and persisted in MongoDB Atlas.

---

## 📁 Directory Structure

```
anthrocarbon/
├── client/                 # React Frontend (Vite)
│   ├── src/
│   │   ├── assets/         # Logo and image assets
│   │   ├── components/     # UI content components (Calculator, Dashboard, Recharts charts)
│   │   ├── pages/          # Layout route pages (CalculatorPage, DashboardPage, GoalsPage, etc.)
│   │   ├── services/       # API integration service (api.js - Axios)
│   │   └── App.jsx         # Handles global React state loading and API sync
│   ├── package.json
│   ├── vercel.json         # Rewrites routing rules for Vercel SPA deployment
│   └── vite.config.js
│
├── server/                 # Express Backend (Node.js)
│   ├── src/
│   │   ├── models/         # Mongoose models (CarbonCalculation.js, Goal.js)
│   │   ├── controllers/    # Request handlers (calculationController.js, goalController.js)
│   │   ├── routes/         # Endpoint mappings (apiRoutes.js)
│   │   ├── services/       # Recommendation engines (insightsEngine.js)
│   │   └── server.js       # Express server initialization & MongoDB connection
│   ├── .env                # Server environment credentials
│   └── package.json
└── README.md
```

---

## ⚙️ Installation & Local Running Instructions

### 1. Running the Server (Backend)
1. Navigate to the server folder:
   ```bash
   cd server
   ```
2. Install server dependencies:
   ```bash
   npm install
   ```
3. Configure the environment variables. Open the `server/.env` file and insert your MongoDB Atlas URI:
   ```env
   PORT=5000
   CLIENT_URL=http://localhost:5174
   MONGODB_URI=your_mongodb_atlas_connection_string
   ```
4. Start the server in development mode (using nodemon):
   ```bash
   npm run dev
   ```
   *The server runs on `http://localhost:5000`.*

### 2. Running the Client (Frontend)
1. Open a new terminal and navigate to the client folder:
   ```bash
   cd client
   ```
2. Install frontend dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
3. Start the Vite React development server:
   ```bash
   npm run dev
   ```
   *The client runs on `http://localhost:5174` (or `5173`).*

---

## ☁️ Deployment Guidelines

### 1. Deploying the Backend (Render)
To host the Node/Express backend on [Render](https://render.com/):
1. Create a new **Web Service** and link your Git repository.
2. Configure these parameters:
   * **Root Directory**: `server`
   * **Build Command**: `npm install`
   * **Start Command**: `npm start`
3. Add **Environment Variables** in the Render settings tab:
   * `PORT`: `10000` (or leave empty)
   * `MONGODB_URI`: *Your MongoDB Atlas Connection String*
   * `CLIENT_URL`: *Your Vercel Frontend URL (e.g. `https://anthrocarbon.vercel.app`)*

### 2. Deploying the Frontend (Vercel)
To host the React client on [Vercel](https://vercel.com/):
1. Import your project in the Vercel dashboard.
2. In the project setup, specify the **Root Directory** as: `client`.
3. Vercel will automatically detect Vite. Keep the default Build and Output settings.
4. Add the following **Environment Variable**:
   * `VITE_API_URL`: *Your deployed Render API URL (e.g., `https://anthrocarbon-backend.onrender.com/api`)*
5. Click **Deploy**. Vercel will build the SPA, and the `client/vercel.json` file will ensure page-routing rewrites work natively without 404 errors.

---

## 📊 Database Models & REST API

### 1. Models (Mongoose Schema)
* **CarbonCalculation**: Persists user footprint records.
  * Fields: `transportType`, `distance`, `electricityUsage`, `foodPreference`, `wasteGenerated`, `transportEmission`, `electricityEmission`, `foodEmission`, `wasteEmission`, `totalCarbonFootprint`, `ecoScore`, `largestSource`, `weeklyProjection`, `createdAt`.
* **Goal**: Tracks carbon targets.
  * Fields: `targetCarbonFootprint`, `currentCarbonFootprint`, `progressPercentage`, `createdAt`.

### 2. REST API Endpoints
* **`POST /api/calculations`**: Receives raw inputs, computes emissions and Eco Scores, detects the largest source, and saves the calculation record.
* **`GET /api/calculations`**: Retrieves the history logs of all calculations.
* **`GET /api/calculations/latest`**: Fetches the most recent calculation record.
* **`DELETE /api/calculations`**: Wipes all stored calculation history.
* **`POST /api/goals`**: Sets or updates the active carbon reduction goal and target progress.
* **`GET /api/goals`**: Fetches the current carbon reduction goal.
* **`GET /api/insights`**: Runs the backend Smart Insights Engine on the latest calculation, returning dynamic categories, concerns, opportunities, and optimization metrics.
