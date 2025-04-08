import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import NotificationPanel from '../components/NotificationPanel';

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const userName = location.state?.userName || 'User';
  const projectName = location.state?.projectName || 'Project';

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const toggleProjectDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleNotificationDropdown = () => {
    setNotificationOpen(!notificationOpen);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li className="active">Dashboard</li>
          <li onClick={() => navigate('/roi')}>ROI</li>
          <li>EMote</li>
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

            {/* Notification */}
            <div className="notification-wrapper">
  <div className="notification-icon" onClick={toggleNotificationDropdown}>🔔</div>
  {notificationOpen && (
    <div className="notification-dropdown">
      <NotificationPanel /> 
    </div>
  )}
</div>
            {/* Project Name Button */}
            <div className="project-dropdown">
              <button className="project-name" onClick={toggleProjectDropdown}>
                {projectName}
              </button>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-item">Option 1</div>
                  <div className="dropdown-item">Option 2</div>
                  <div className="dropdown-item">Option 3</div>
                  <div className="dropdown-item" onClick={() => navigate('/onboarding')}>Add New Project</div>
                </div>
              )}
            </div>

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
