// Import jQuery for DOM manipulation
import $ from 'jquery';
// Import the CSS file for footer styling
import "./footer.css";

// Append an empty footer element to the body
$('body').append('<footer></footer>');
// Append a paragraph with text "Copyright - Holberton School" to the footer
$('footer').append('<p>Copyright - Holberton School</p>');