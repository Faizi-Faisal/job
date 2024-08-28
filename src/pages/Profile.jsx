import React from 'react';
import './Profile.css'; // Importing the CSS file
import BottomNavBar from './BottomNavBar';

const Profile = () => {
  return (
    <>
        <div className="profilepagejob-container-outer">
      <div className="profilepagejob-container">
        <div className="profilepagejob-header">
          <h3>Profile</h3>
        </div>

        <div className="profilepagejob-profile-info">
          <img
            src="https://www.psychologs.com/wp-content/uploads/2024/01/8-tips-to-be-a-jolly-person.jpg"
            alt="Profile"
            className="profilepagejob-profile-image"
          />
          <div className="profilepagejob-profile-details">
            <h4 className="profilepagejob-profile-name">John Carpenter</h4>
            <span className="profilepagejob-profile-view">View profile</span>
          </div>
        </div>

        <div className="profilepagejob-list-group">
          <button className="profilepagejob-list-item" style={{color:'#000', fontSize:'14px'}}>
            Personal Information
           
          </button>
          <button className="profilepagejob-list-item" style={{color:'#000', fontSize:'14px'}}>
            Account Details
           
          </button>
          <button className="profilepagejob-list-item" style={{color:'#000', fontSize:'14px'}}>
            Refer & Earn
           
          </button>
          <button className="profilepagejob-list-item" style={{color:'#000', fontSize:'14px'}}>
            Language
            <span className="profilepagejob-text-muted">English (US)</span>
          </button>
          <button className="profilepagejob-list-item" style={{color:'#000', fontSize:'14px'}}>
            Terms & Conditions
           
          </button>
          <button className="profilepagejob-list-item" style={{color:'#000', fontSize:'14px'}}>
            Logout
           
          </button>
         
        </div>
      </div>
      </div>
      <BottomNavBar />
    </>
  );
};

export default Profile;
