import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png'; // Make sure you have the correct path to the close icon
import { getLatestNotification } from './utils';
import NotificationItem from './NotificationItem'; // Import the NotificationItem component

export function Notifications() {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications" style={{ position: 'relative', padding: '20px', border: '2px solid #ccc', margin: '10px', backgroundColor: '#f9f9f9' }}>
      <button
        onClick={handleButtonClick}
        aria-label="Close"
        style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <img src={closeIcon} alt="Close" style={{ width: '15px', height: '15px' }}/>
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available"/>
        <NotificationItem type="urgent" value="New resume available"/>
        <NotificationItem html={getLatestNotification()}/>
      </ul>
    </div>
  );
}

export default Notifications;
