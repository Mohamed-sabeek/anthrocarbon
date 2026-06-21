import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Calculator from './components/Calculator';
import Dashboard from './components/Dashboard';
import Insights from './components/Insights';
import GoalTracker from './components/GoalTracker';
import EcoChallenges from './components/EcoChallenges';
import History from './components/History';
import Footer from './components/Footer';

// Seed mock data for an outstanding first impression
const MOCK_HISTORY = [
  {
    inputs: { transportType: 'Car', distance: 30, electricity: 12, foodPreference: 'Non-Vegetarian', waste: 3 },
    breakdown: { transport: 7.5, electricity: 9.84, food: 3.0, waste: 1.5 },
    total: 21.84,
    ecoScore: 35,
    ecoStatus: 'Poor',
    ecoColor: 'text-rose-700 bg-rose-50 border-rose-200',
    ecoIcon: '🚨',
    date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days ago
  },
  {
    inputs: { transportType: 'Bus', distance: 30, electricity: 8, foodPreference: 'Mixed', waste: 2 },
    breakdown: { transport: 3.0, electricity: 6.56, food: 2.0, waste: 1.0 },
    total: 12.56,
    ecoScore: 62,
    ecoStatus: 'Moderate',
    ecoColor: 'text-amber-700 bg-amber-50 border-amber-200',
    ecoIcon: '⚠️',
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
  },
  {
    inputs: { transportType: 'Train', distance: 20, electricity: 5, foodPreference: 'Vegetarian', waste: 1 },
    breakdown: { transport: 1.0, electricity: 4.10, food: 1.0, waste: 0.5 },
    total: 6.60,
    ecoScore: 80,
    ecoStatus: 'Good',
    ecoColor: 'text-teal-700 bg-teal-50 border-teal-200',
    ecoIcon: '🌿',
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
  },
];

export default function App() {
  const [historyList, setHistoryList] = useState([]);
  const [currentFootprint, setCurrentFootprint] = useState(null);
  const [targetFootprint, setTargetFootprint] = useState(8.0);
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [activeSection, setActiveSection] = useState('home');

  // Load configuration and data from Local Storage or default to mock data
  useEffect(() => {
    // 1. History
    const localHistory = localStorage.getItem('anthrocarbon_history');
    if (localHistory) {
      try {
        const parsed = JSON.parse(localHistory);
        setHistoryList(parsed);
        if (parsed.length > 0) {
          setCurrentFootprint(parsed[0]);
        }
      } catch (err) {
        console.error('Error parsing local history, using mocks', err);
        setHistoryList(MOCK_HISTORY);
        setCurrentFootprint(MOCK_HISTORY[2]);
      }
    } else {
      localStorage.setItem('anthrocarbon_history', JSON.stringify(MOCK_HISTORY));
      setHistoryList(MOCK_HISTORY);
      setCurrentFootprint(MOCK_HISTORY[2]); // latest is indices 2 (3 days ago)
    }

    // 2. Target
    const localTarget = localStorage.getItem('anthrocarbon_target');
    if (localTarget) {
      setTargetFootprint(parseFloat(localTarget));
    } else {
      localStorage.setItem('anthrocarbon_target', '8.0');
      setTargetFootprint(8.0);
    }

    // 3. Challenges
    const localChallenges = localStorage.getItem('anthrocarbon_challenges');
    if (localChallenges) {
      try {
        setCompletedChallenges(JSON.parse(localChallenges));
      } catch (err) {
        console.error('Error parsing challenges', err);
      }
    }
  }, []);

  // Sync scroll location for sticky navbar highlights
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections = ['home', 'calculator', 'dashboard', 'insights', 'goals', 'history'];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCalculationComplete = (newData) => {
    const updatedHistory = [newData, ...historyList];
    setHistoryList(updatedHistory);
    setCurrentFootprint(newData);
    localStorage.setItem('anthrocarbon_history', JSON.stringify(updatedHistory));
  };

  const handleClearHistory = () => {
    setHistoryList([]);
    setCurrentFootprint(null);
    localStorage.removeItem('anthrocarbon_history');
  };

  const handleReloadHistoryItem = (item) => {
    setCurrentFootprint(item);
    const dashboardElement = document.getElementById('dashboard');
    if (dashboardElement) {
      dashboardElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTargetChange = (newTarget) => {
    setTargetFootprint(newTarget);
    localStorage.setItem('anthrocarbon_target', newTarget.toString());
  };

  const handleToggleChallenge = (challengeId) => {
    let updated;
    if (completedChallenges.includes(challengeId)) {
      updated = completedChallenges.filter(id => id !== challengeId);
    } else {
      updated = [...completedChallenges, challengeId];
    }
    setCompletedChallenges(updated);
    localStorage.setItem('anthrocarbon_challenges', JSON.stringify(updated));
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Layout sections */}
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        <Calculator onCalculationComplete={handleCalculationComplete} />
        
        {currentFootprint ? (
          <>
            <Dashboard currentFootprint={currentFootprint} />
            <Insights currentFootprint={currentFootprint} />
            <GoalTracker 
              currentFootprint={currentFootprint} 
              targetFootprint={targetFootprint} 
              onTargetChange={handleTargetChange} 
            />
          </>
        ) : (
          <div className="py-20 text-center bg-gray-50 border-y border-gray-100">
            <p className="text-gray-400 font-medium text-sm">
              Please enter your lifestyle info in the calculator to unlock your Dashboard and insights.
            </p>
          </div>
        )}

        <EcoChallenges 
          completedChallenges={completedChallenges} 
          onToggleChallenge={handleToggleChallenge} 
        />
        
        <History 
          historyList={historyList} 
          onClearHistory={handleClearHistory} 
          onReloadHistoryItem={handleReloadHistoryItem} 
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
