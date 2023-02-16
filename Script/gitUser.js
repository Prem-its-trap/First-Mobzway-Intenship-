const url = "https://api.github.com/users";

let getUser = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => console.log(item));
};
getUser();
