// Import the CSS file for styling
import './body.css';
// Import jQuery for DOM manipulation
import $ from 'jquery';
// Import Lodash for utility functions
import _ from 'lodash';

// Append a paragraph with text "Holberton Dashboard" to the body
$('body').append('<p>Holberton Dashboard</p>');
// Append a paragraph with text "Dashboard data for the students" to the body
$('body').append('<p>Dashboard data for the students</p>');
// Append a button with text "Click here to get started" to the body
$('body').append('<button>Click here to get started</button>');
// Append an empty paragraph with id "count" to the body for displaying click count
$('body').append('<p id="count"></p>');
// Append a paragraph with text "Copyright - Holberton School" to the body
$('body').append('<p>Copyright - Holberton School</p>');

// Initialize the click counter variable
let count = 0;

// Function to update the click counter
function updateCounter() {
  // Increment the counter
  count++;
  // Update the HTML content of the paragraph with id "count" to show the updated count
  $("#count").html(`${count} clicks on the button`);
}

// Attach a click event listener to the button that triggers the updateCounter function
// The function is debounced to limit its execution to once every 500 milliseconds
$('button').on('click', _.debounce(updateCounter, 500));
