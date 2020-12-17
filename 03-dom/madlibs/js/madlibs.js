const button = document.getElementById('lib-button');

// In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")
const makeMadLib = function () {
  const noun = document.getElementById('noun').value;
  const adjective = document.getElementById('adjective').value;
  const name = document.getElementById('person').value;

  const story = `${ name } really likes ${ adjective } ${ noun }.`;

  document.getElementById('story').innerHTML = story;
};

// Add an event listener to the button so that it calls a makeMadLib function when clicked.
button.addEventListener('click', makeMadLib);
