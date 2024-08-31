function getFullYear() {
    const currentDate = new Date();
    return currentDate.getFullYear();
  }

function getFooterCopy(isIndex) {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
  }

function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}

  export { getFullYear, getFooterCopy, getLatestNotification };
