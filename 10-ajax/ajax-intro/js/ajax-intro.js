const fetchFact = function () {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://numbersapi.com/random/trivia?json');
  xhr.send(); // asynchronous

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return; // exit the function, the data isn't available yet.

    const data = JSON.parse(xhr.responseText); // Convert the JSON string into a real JS object.

    const p = document.createElement('p'); // detached DOM node
    p.innerHTML = data.text;
    document.body.appendChild( p ); // attach the DOM node.
  };
};

document.getElementById('fetch').addEventListener('click', fetchFact);
fetchFact(); // First fact for free.
