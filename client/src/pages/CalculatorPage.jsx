import React from 'react';
import { useNavigate } from 'react-router-dom';
import Calculator from '../components/Calculator';

export default function CalculatorPage({ onCalculationComplete }) {
  const navigate = useNavigate();

  const handleComplete = (data) => {
    onCalculationComplete(data);
    navigate('/dashboard');
  };

  return (
    <div className="pt-28 pb-16 min-h-screen bg-gradient-to-b from-emerald-50/10 via-white to-emerald-50/20 animate-fadeIn">
      {/* Background radial highlight */}
      <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-emerald-100/10 rounded-full blur-3xl -z-10" />

      <Calculator onCalculationComplete={handleComplete} />
    </div>
  );
}
