const wrapper = document.getElementById("wrapper");
const fetchButton = document.createElement("button");
const refreshButton = document.createElement("button");
const jokewrapper = document.createElement("div");

fetchButton.innerHTML = "fetch Data";
refreshButton.innerText = "Refresh Data";
wrapper.appendChild(refreshButton);
wrapper.appendChild(fetchButton);
wrapper.appendChild(jokewrapper);

fetchButton.addEventListener("click", fetchJokes);
refreshButton.addEventListener("click", refreshJokes);

function handleErrors(response) {
  console.log(response);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function refreshJokes() {
  jokewrapper.innerHTML = "";
  fetchJokes();
}
function fetchJokes() {
  jokes = document.createElement("div");
  fetch("https://official-joke-api.appspot.com/random_ten")
    .then(handleErrors)
    .then(data => data.json())
    .then(data => {
      for (let d of data) {
        jokeDiv = document.createElement("div");
        let joke = `<h1> ${d.type} </h1>
        <p>${d.setup}</p>
        <p>${d.punchline}</p>`;
        jokeDiv.innerHTML = joke;
        jokes.appendChild(jokeDiv);
        jokewrapper.appendChild(jokes);
      }
    })
    .catch(error => alert("sorry, we couldn't access the API" + error));
}
