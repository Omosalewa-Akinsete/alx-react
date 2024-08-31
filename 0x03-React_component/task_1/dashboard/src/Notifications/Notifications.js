import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from './close-icon.png'; // Ensure the correct path to the close icon
import { getLatestNotification } from './utils';
import NotificationItem from './NotificationItem'; // Import the NotificationItem component
import { NotificationItemShape } from './NotificationItemShape';

export function Notifications({ displayDrawer, listNotifications }) {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  if (!displayDrawer) {
    return null; // Do not render anything if displayDrawer is false
  }

  return (
    <>
      <div className="menuItem">Your notifications</div>
      <div
        className="Notifications"
        style={{
          position: 'relative',
          padding: '20px',
          border: '2px solid #ccc',
          margin: '10px',
          backgroundColor: '#f9f9f9',
          display: displayDrawer ? 'block' : 'none' // Apply conditional display
        }}
      >
        <button
          onClick={handleButtonClick}
          aria-label="Close"
          style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <img src={closeIcon} alt="Close" style={{ width: '15px', height: '15px' }}/>
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          {listNotifications.length === 0 ? (
            <li>No new notification for now</li>
          ) : (
            listNotifications.map(notification => (
              <NotificationItem key={notification.id} notification={notification} />
            ))
          )}
        </ul>
      </div>
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape).isRequired,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
