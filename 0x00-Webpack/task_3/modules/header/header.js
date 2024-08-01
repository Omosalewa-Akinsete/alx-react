// Import the CSS file for header styling
import "./header.css";
// Import jQuery for DOM manipulation
import $ from 'jquery';

// Append an empty header element to the body
$('body').append('<header></header>');
// Append a div with id "logo" and an h1 element with text "Holberton Dashboard" to the header
$('header').append('<div id="logo"></div>', "<h1>Holberton Dashboard</h1>");

// Log a message to the console to indicate that the header initialization is complete
console.log("Init header");