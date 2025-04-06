import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Onboarding.css';

function Onboarding() {
  const location = useLocation();
  const navigate = useNavigate();
  const userName = location.state?.userName || 'User';

  const [projectName, setProjectName] = useState('');

  const handleStartProject = () => {
    if (projectName.trim() !== '') {
      navigate('/dashboard', { state: { userName, projectName } });
    } else {
      alert('Please enter a project name');
    }
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-header">
        <div className="onboarding-logo">{userName}</div>
      </div>

      <div className="onboarding-main">
        <div className="onboarding-image">
          <img src="your-image-url.png" alt="Welcome" />
        </div>

        <div className="onboarding-content">
          <h2>Welcome {userName}!</h2>
          <p>To get started, let's create your first project.</p>

          <div className="onboarding-input-group">
            <input
              type="text"
              placeholder="Name of project"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
            <button onClick={handleStartProject}>{'>'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
console.log('Onboarding component rendered');
console.log('User name:', userName);
console.log('Project name:', projectName);

const handleStartProject = () => {
  console.log('Start project button clicked');
  if (projectName.trim() !== '') {
    console.log('Navigating to dashboard with project name:', projectName);
    navigate('/dashboard', { state: { userName, projectName } });
  } else {
    console.log('Project name is empty');
    alert('Please enter a project name');
  }
};