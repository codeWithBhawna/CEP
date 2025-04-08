import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Dashboard.css';

function ROI() {
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
          <li className="active">ROI</li>
          <li onClick={() => navigate('/dashboard')}>Dashboard</li>
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
                  <div className="notification-item">Notification 1</div>
                  <div className="notification-item">Notification 2</div>
                  <div className="notification-item">Notification 3</div>
                  <div className="notification-item">Notification 4</div>
                  <div className="notification-item">Notification 5</div>
                  <div className="notification-item">Notification 6</div>
                  <div className="notification-item">Notification 7</div>
                  <div className="notification-item">Notification 8</div>
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

          <button className="roi-button">
               Calculate your first ROI
            </button>
        </div>
      </div>
    </div>
  );
}

export default ROI;
