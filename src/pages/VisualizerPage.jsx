// src/pages/VisualizerPage.jsx
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import WeeksOfLife from '../components/WeekGrid';
import StatsPanel from '../components/StatsPanel';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function VisualizerPage() {
  const query = useQuery();
  const dob = query.get('dob');
  const [birthdate, setBirthdate] = useState('');

  useEffect(() => {
    if (dob) setBirthdate(dob);
  }, [dob]);

  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-normal text-gray-800 mb-2">Your Life in Weeks</h1>
        <p className="text-gray-600 mb-8">A perspective tool to reflect on your time.</p>
        <WeeksOfLife birthdateFromParent={birthdate} />
        <StatsPanel birthdate={birthdate} />
      </div>
    </div>
  );
}
