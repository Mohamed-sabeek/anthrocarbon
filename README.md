# AnthroCarbon – Smart Carbon Footprint Tracker & Sustainability Assistant

AnthroCarbon is a premium, fully responsive React-based web application designed to help individuals calculate, analyze, monitor, and reduce their daily carbon footprint. 

Unlike simple carbon calculators, AnthroCarbon operates as an intelligent sustainability assistant, evaluating user lifestyle choices (commutes, energy consumption, diet, and waste) to offer personalized recommendations, visual analytics, goal-tracking metrics, and interactive daily eco-challenges.

---

## 🚀 Features

### 1. Sticky Navigation Bar
A sticky header with glassmorphism effects, featuring section links and scroll indicators that auto-scroll and highlight sections on active viewport intersection.

### 2. Modern Hero Section
An engaging entrance with the main tagline, a custom CSS/SVG animated eco-balance illustration, and animated platform statistics.

### 3. Features & Process Flows
Four professional, glowing feature cards and a structured 4-step process guide describing how users can transition towards zero-carbon living.

### 4. Interactive Carbon Calculator
A multi-category form with number input validation:
* **Transportation**: Supports Car (0.25 kg CO₂/km), Bus (0.10 kg CO₂/km), Train (0.05 kg CO₂/km), Bicycle (0 kg), and Walking (0 kg).
* **Electricity**: Daily consumption in kWh (0.82 kg CO₂/kWh factor).
* **Food**: Dietary preference (Vegetarian = 1 kg CO₂, Mixed = 2 kg CO₂, Non-Vegetarian = 3 kg CO₂).
* **Waste**: Daily solid waste in kg (0.5 kg CO₂/kg waste factor).

### 5. Eco Score System
Evaluates daily footprint into a rating from 0 to 100:
* **90 - 100**: Excellent 🌱
* **70 - 89**: Good 🌿
* **50 - 69**: Moderate ⚠️
* **Below 50**: Poor 🚨

### 6. Analytics Dashboard (Recharts)
Four performance metrics cards (Total Carbon Footprint, Eco Score, Largest Emission Source, and Weekly Carbon Projection) coupled with interactive, responsive visual charts:
* **Pie Chart**: Visualizes the daily emission distribution percentage by category.
* **Bar Chart**: Projects weekly carbon emissions for each category.

### 7. Smart Sustainability Insights (Recommendation Engine)
Identifies the user's largest carbon emission source and dynamically provides:
* The major environmental concern associated with the category.
* Specific improvement opportunities.
* Actionable, personalized recommendations.
* Estimated reduction potential (e.g., -60% for Transport) in both percentage and physical kg values.

### 8. Interactive Goal Tracker
Allows users to drag a slider to establish a target daily carbon footprint. It dynamically computes:
* The percentage reduction required.
* Goal coverage progress bar.
* Target ambition status (Healthy Step, Eco Warrior, or Carbon Hero).

### 9. Gamified Eco Challenges
Six daily, toggleable eco-challenges (e.g., walk 2 km, avoid single-use plastics) that instantly update a progress card showing completed counts and total physical CO₂ offsets saved today.

### 10. Audit History Tracking
Preserves calculations locally in `localStorage`. History records are displayed in a clean table where users can:
* Click on historical entries to immediately reload their inputs and dashboard analytics.
* Sort records by Date, Footprint, or Eco Score.
* Clear history logs with a secure confirmation prompt.

---

## 🛠️ Tech Stack & Directory Structure

* **Framework**: React.js 19 (Vite)
* **Styling**: Tailwind CSS v4 (native imports, high performance)
* **Icons**: Lucide React Icons
* **Charts**: Recharts (Responsive SVG charts)
* **Persistence**: Local Storage API

```
anthrocarbon/
├── public/
├── src/
│   ├── assets/            # Static image assets
│   ├── components/        # Reusable dashboard components
│   │   ├── Navbar.jsx     # Sticky navigation & mobile drawer
│   │   ├── Hero.jsx       # Tagline, stats & interactive CSS illustration
│   │   ├── Features.jsx   # Feature cards with hover glow
│   │   ├── HowItWorks.jsx # Process flow stepper
│   │   ├── Calculator.jsx # Inputs form & validation engine
│   │   ├── Dashboard.jsx  # Recharts Pie/Bar visualizations & metrics cards
│   │   ├── Insights.jsx   # Recommendation engine & savings calculators
│   │   ├── GoalTracker.jsx# Dynamic goal sliders & progress bars
│   │   ├── EcoChallenges.jsx# Checkboxes & gamification card
│   │   ├── History.jsx    # Sortable audit table & local storage resets
│   │   └── Footer.jsx     # Copyright & mission statement
│   ├── App.jsx            # State coordinator, local storage loaders & scroll listener
│   ├── index.css          # Tailwind imports, fonts & custom scrollbars
│   └── main.jsx           # ReactDOM renderer
├── index.html             # Brand titles, meta tags, and SEO metrics
├── package.json           # Scripts and dependencies
└── vite.config.js         # Tailwind and React bundler plugins
```

---

## ⚙️ Installation & Running Locally

1. **Install Dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Run in Development Mode**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your web browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```
   Compiles optimized assets in the `/dist` directory.

---

## 📤 Git Workflow – How to Push

Follow these commands to stage, commit, and push this project to your repository (GitHub, GitLab, etc.):

1. **Initialize Git (if not already done)**:
   ```bash
   git init
   ```

2. **Stage all files**:
   ```bash
   git add .
   ```

3. **Create the initial commit**:
   ```bash
   git commit -m "feat: complete AnthroCarbon tracker and assistant dashboard"
   ```

4. **Rename branch to main (recommended default)**:
   ```bash
   git branch -M main
   ```

5. **Link to your remote repository** (replace `<YOUR_REPO_URL>` with your actual Git repository URL, e.g., `https://github.com/username/anthrocarbon.git`):
   ```bash
   git remote add origin <YOUR_REPO_URL>
   ```

6. **Push to the remote repository**:
   ```bash
   git push -u origin main
   ```
