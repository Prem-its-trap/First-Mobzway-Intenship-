const jokecontainer = document.getElementById("joke");
const button = document.getElementById("button");

const url = "https://api.chucknorris.io/jokes/random";

const getJoke = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      document.getElementById("joke").innerHTML = `${item.value}`;
      //   console.log(item.value);
    });
};

window.onload = function () {
  document.getElementById("button").addEventListener("click", getJoke);
  getJoke();
};
