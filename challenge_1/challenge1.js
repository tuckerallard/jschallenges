/**
 * Using the LocalStorage API, save the contents of the text box
 * when users click the "save" button. 
 * Load the saved text when users click the "Load" button.
 *
 * Here's the documentation you need:
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 */

var saveButton = $('#save-button');
var loadButton = $('#load-button');

localStorage.testText = "test";

/**
 * Gets the text from the element for you
 * @return {String}
 */
function getText() {
  return $('#save-me').val();
}

/**
 * Puts different text
 * @param {String} text the stuff you want to put in the box
 */
function setText(text) {
  return $('#save-me').val(text);
}

saveButton.click(function(){
	localStorage.setItem('testText', getText());
	alert("date saved: " + localStorage.getItem('testText'));
});

loadButton.click(function(){
	setText(localStorage.getItem('testText'));
});