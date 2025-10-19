const d = document,
  $main = d.querySelector("main"),
  $links = d.querySelector("links");

let pokeApi = "https://pokeapi.co/api/v2/pokemon/";

const loadPokemons = async (url) => {
  try {
    $main.innerHTML = `<img class="loader" src="./assets/loader.svg" alt="loader">`;
    let res = await fetch(url),
      json = await res.json(),
      $template = "",
      $preLink,
      $nextLink;
      console.log(json);
      
  } catch (err) {}
};

d.addEventListener("DOMContentLoaded", loadPokemons(pokeApi));
