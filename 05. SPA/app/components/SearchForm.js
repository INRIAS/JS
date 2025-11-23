export function SearchForm() {
  const $searchForm = document.createElement("form"),
    $input = document.createElement("input");

  $searchForm.appendChild($input);
  $searchForm.classList.add("search-form");
  $input.name = "search";
  $input.type = "search";
  $input.placeholder = "Buscar...";
  $input.autocomplete = "off";

  $searchForm.appendChild($input);

  if (location.hash.includes("#/search")) {
    $input.value = localStorage.getItem("wpSearch");
  }

  document.addEventListener("click", (e) => {
    if (e.target.matches(".btn-search")) localStorage.removeItem("wpSearch");
  });

  document.addEventListener("search", (e) => {
    if (!e.target.matches("input[type='search']")) return false;
    if (!e.target.value) localStorage.removeItem("wpSearch");
  });

  document.addEventListener("submit", (e) => {
    if (!e.target.matches(".search-form")) return false;
    e.preventDefault();

    localStorage.setItem("wpSearch", e.target.search.value);
    location.hash = `#/search?search=${e.target.search.value}`;
  });

  return $searchForm;
}
