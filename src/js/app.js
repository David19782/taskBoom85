import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const url = "https://pokeapi.co/api/v2/pokemon?limit=10";
  const ul = document.querySelector("ul");
  fetch(url)
  .then(res => res.json())
  .then(data => {
    //console.log(data);
    for(let i = 0; i < 10; i++){
      const li = document.createElement('li');
      li.innerText = data.results[i].name;
      ul.appendChild(li);
    }
    
  })

});
