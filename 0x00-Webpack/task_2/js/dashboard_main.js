// Importing the CSS file for styling
import '../css/main.css';

// Importing jQuery for DOM manipulation
import $ from 'jquery';

// Importing Lodash library for utility functions
import _ from 'lodash';

// Appending a paragraph element with text 'Holberton Dashboard' to the body of the document
$('body').append('<p>Holberton Dashboard</p>');

// Appending a paragraph element with text 'Dashboard data for the students' to the body of the document
$('body').append('<p>Dashboard data for the students</p>');

// Appending a button element with text 'Click here to get started' to the body of the document
$('body').append('<button>Click here to get started</button>');

// Appending a paragraph element with id 'count' to the body of the document
$('body').append('<p id="count"></p>');

// Appending a paragraph element with text 'Copyright - Holberton School' to the body of the document
$('body').append('<p>Copyright - Holberton School</p>');

// Initializing a counter variable
let count = 0;

// Function to update the counter and display the count in the paragraph with id 'count'
function updateCounter() {
  count++; // Increment the counter
  $("#count").html(`${count} clicks on the button`); // Update the content of the paragraph with the new count
}

// Adding a click event listener to the button. The updateCounter function will be called with a debounce of 500 milliseconds
$('button').on('click', _.debounce(updateCounter, 500));
