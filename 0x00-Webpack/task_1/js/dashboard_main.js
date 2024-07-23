// Import jQuery and Lodash
import $ from 'jquery';
import _ from 'lodash';

let count = 0;

// Function to update the counter
function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

// Document ready function
$(document).ready(function() {
  // Create and append the elements
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="click-button">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  // Bind the debounced updateCounter function to the button's click event
  $('#click-button').on('click', _.debounce(updateCounter, 300));
});
