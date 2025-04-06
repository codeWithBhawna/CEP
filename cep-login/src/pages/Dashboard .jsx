import React from 'react';
import { useLocation } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const location = useLocation();
  const userName = location.state?.userName || 'User';
  const projectName = location.state?.projectName || 'Project';

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li className="active">Dashboard</li>
          <li>ROI</li>
          <li>EMate</li>
          <li>Visualize</li>
          <li>Resources</li>
        </ul>
        <div className="user-profile">{userName}</div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Bar */}
        <div className="top-bar">
          <div className="logo">Logo</div>
          <div className="top-bar-right">
            <div className="notification-icon">🔔</div>
            <div className="project-name">{projectName}</div>
          </div>
        </div>

        {/* Center Welcome Section */}
        <div className="welcome-section">
          <h2>Good morning, {userName}!</h2>
          <p>"Our role is to imagine products that don't exist and guide them to life."</p>
          <p>~ Christopher Stringer, Former Designer at Apple</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
