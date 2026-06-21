import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import apiService from './services/api';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import DashboardPage from './pages/DashboardPage';
import InsightsPage from './pages/InsightsPage';
import GoalsPage from './pages/GoalsPage';
import HistoryPage from './pages/HistoryPage';

export default function App() {
  const [historyList, setHistoryList] = useState([]);
  const [currentFootprint, setCurrentFootprint] = useState(null);
  const [targetFootprint, setTargetFootprint] = useState(8.0);
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Load calculations and goals from the backend on mount
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch calculations
        const calculations = await apiService.getCalculations();
        setHistoryList(calculations);
        
        if (calculations.length > 0) {
          setCurrentFootprint(calculations[0]); // default to latest
        }

        // Fetch goal
        const goal = await apiService.getGoal();
        if (goal) {
          setTargetFootprint(goal.targetFootprint);
        } else {
          setTargetFootprint(8.0); // fallback default
        }

        // Fetch completed challenges from localStorage
        const localChallenges = localStorage.getItem('anthrocarbon_challenges');
        if (localChallenges) {
          try {
            setCompletedChallenges(JSON.parse(localChallenges));
          } catch (err) {
            console.error('Error parsing challenges', err);
          }
        }
      } catch (err) {
        console.error('Error fetching data from API:', err);
        setError('Could not connect to the backend server. Please make sure the backend is running.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  const handleCalculationComplete = async (newData) => {
    // Add to history list locally (already saved on backend during form submit)
    setHistoryList(prev => [newData, ...prev]);
    setCurrentFootprint(newData);

    // Update goal details with the new current carbon footprint
    try {
      await apiService.saveGoal({
        targetCarbonFootprint: targetFootprint,
        currentCarbonFootprint: newData.total,
      });
    } catch (err) {
      console.error('Error updating goal target with new calculation:', err);
    }
  };

  const handleClearHistory = async () => {
    try {
      await apiService.clearCalculations();
      setHistoryList([]);
      setCurrentFootprint(null);
    } catch (err) {
      console.error('Error clearing calculations on server:', err);
    }
  };

  const handleReloadHistoryItem = (item) => {
    setCurrentFootprint(item);
    navigate('/dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTargetChange = async (newTarget) => {
    setTargetFootprint(newTarget);
    try {
      await apiService.saveGoal({
        targetCarbonFootprint: newTarget,
        currentCarbonFootprint: currentFootprint ? currentFootprint.total : 0,
      });
    } catch (err) {
      console.error('Error saving goal on backend:', err);
    }
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

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center pt-24">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin" />
            <p className="text-gray-500 font-medium">Connecting to AnthroCarbon Server...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center pt-24 px-4">
          <div className="bg-rose-50 border border-rose-100 rounded-3xl p-8 max-w-md w-full text-center space-y-4">
            <span className="text-4xl">🔌</span>
            <h3 className="text-lg font-bold text-rose-950 font-display">Server Connection Issue</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm rounded-xl transition-all cursor-pointer"
            >
              Retry Connection
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Page Content Routes */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/calculator" 
            element={<CalculatorPage onCalculationComplete={handleCalculationComplete} />} 
          />
          <Route 
            path="/dashboard" 
            element={<DashboardPage currentFootprint={currentFootprint} />} 
          />
          <Route 
            path="/insights" 
            element={<InsightsPage currentFootprint={currentFootprint} />} 
          />
          <Route 
            path="/goals" 
            element={<GoalsPage 
              currentFootprint={currentFootprint} 
              targetFootprint={targetFootprint} 
              onTargetChange={handleTargetChange} 
              completedChallenges={completedChallenges}
              onToggleChallenge={handleToggleChallenge}
            />} 
          />
          <Route 
            path="/history" 
            element={<HistoryPage 
              historyList={historyList} 
              onClearHistory={handleClearHistory} 
              onReloadHistoryItem={handleReloadHistoryItem} 
            />} 
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
