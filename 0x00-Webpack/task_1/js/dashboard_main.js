// Import jQuery and Lodash libraries
import $ from 'jquery';
import _ from 'lodash';

// Add elements to the body of the document
$('body').append('<p>Holberton Dashboard</p>'); // Adds a paragraph with text "Holberton Dashboard"
$('body').append('<p>Dashboard data for the students</p>'); // Adds a paragraph with text "Dashboard data for the students"
$('body').append('<button>Click here to get started</button>'); // Adds a button with text "Click here to get started"
$('body').append('<p id="count"></p>'); // Adds an empty paragraph with id "count" for displaying click count
$('body').append('<p>Copyright - Holberton School</p>'); // Adds a paragraph with text "Copyright - Holberton School"

// Initialize a counter variable
let count = 0;

// Define a function to update the counter and display the click count
function updateCounter() {
    count++; // Increment the counter
    $('#count').html(`${count} clicks on the button`); // Update the content of the paragraph with id "count"
};

// Bind the updateCounter function to the button's click event with a debounce of 500ms
$('button').on('click', _.debounce(updateCounter, 500));
