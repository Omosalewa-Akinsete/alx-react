import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {
  handleClick = () => {
    const { id, markAsRead } = this.props;
    if (markAsRead) {
      markAsRead(id);
    }
  };

  render() {
    const { type, value, html } = this.props;

    if (html) {
      return <li onClick={this.handleClick} data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}/>;
    }

    return <li onClick={this.handleClick} data-notification-type={type}>{value}</li>;
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  id: PropTypes.number.isRequired,
  markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: null,
  markAsRead: null
};

export default NotificationItem;
