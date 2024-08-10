function getFullYear() {
    const currentDate = new Date();
    return currentDate.getFullYear();
  }

function getFooterCopy(isIndex) {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
  } 

  export {getFullYear, getFooterCopy}
