import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import LearningTracker from './pages/LearningTracker';
import ProjectShowcase from './pages/ProjectShowcase';
import TechGenome from './pages/TechGenome';
import AchievementsVault from './pages/AchievementsVault';
import RoadmapTimeline from './pages/RoadmapTimeline';
import SystemDesignRoom from './pages/SystemDesignRoom';
import SocialLeaderboard from './pages/SocialLeaderboard';
import FriendConnections from './pages/FriendConnections';
import Login from './Login';
import Signup from './Signup';
import { AuthProvider } from './AuthContext';

import './App.css'; // Your main CSS file

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/learning-tracker" element={<LearningTracker />} />
            <Route path="/project-showcase" element={<ProjectShowcase />} />
            <Route path="/tech-genome" element={<TechGenome />} />
            <Route path="/achievements-vault" element={<AchievementsVault />} />
            <Route path="/roadmap-timeline" element={<RoadmapTimeline />} />
            <Route path="/system-design-room" element={<SystemDesignRoom />} />
            <Route path="/social-leaderboard" element={<SocialLeaderboard />} />
            <Route path="/friend-connections" element={<FriendConnections />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;


