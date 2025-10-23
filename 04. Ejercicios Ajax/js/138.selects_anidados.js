import PASS from "./138.pass.js";

const d = document,
  $selectPrimary = d.getElementById("select-primary"),
  $selectSecondary = d.getElementById("select-secondary"),
  $selectTertiary = d.getElementById("select-tertiary"),
  cors = "https://api.allorigins.win/raw?url=";

const loadStates = async () => {
  try {
    let estadosRes = await fetch(
        `https://api.copomex.com/query/get_estados?token=pruebas`
      ),
      estadoJson = await estadosRes.json();

    console.log(estadoJson);

    if (!estadosRes.ok)
      throw { status: estadosRes.status, statusText: estadosRes.statusText };

    let $options = `<option value="">Elige un Estado</option>`;
    estadoJson.response.estado.forEach((el) => {
      $options += `<option value="${el}">${el}</option>`;
    });

    $selectPrimary.innerHTML = $options;
  } catch (err) {
    let message = err.statusText || "Ha ocusrrido un error";
    $selectPrimary.nextElementSibling.innerHTML = `Error ${err.status}: ${message}`;
  }
};

const loadTowns = async (states) => {
  try {
    let municipioRes = await fetch(
        `https://api.copomex.com/query/get_municipio_por_estado/${states}?token=pruebas`
      ),
      municipioJson = await municipioRes.json();

    console.log(municipioJson);

    if (!municipioRes.ok)
      throw {
        status: municipioRes.status,
        statusText: municipioRes.statusText,
      };

    let $options = `<option value="">Elige un Municipio</option>`;
    municipioJson.response.municipios.forEach((el) => {
      $options += `<option value="${el}">${el}</option>`;
    });

    $selectSecondary.innerHTML = $options;
  } catch (err) {
    let message = err.statusText || "Ha ocusrrido un error";
    $selectSecondary.nextElementSibling.innerHTML = `Error ${err.status}: ${message}`;
  }
};

const loadSuburbs = async (suburb) => {
  try {
    let suburbiosRes = await fetch(
        `https://api.copomex.com/query/get_colonia_por_municipio/${suburb}?token=pruebas`
      ),
      suburbiosJson = await suburbiosRes.json();
      
    console.log(suburbiosJson);
    if (!suburbiosRes.ok)
      throw {
        status: suburbiosRes.status,
        statusText: suburbiosRes.statusText,
      };

    let $options = `<option value="">Elige una Colonia</option>`;
    suburbiosJson.response.colonia.forEach((el) => {
      $options += `<option value="${el}">${el}</option>`;
    });

    $selectTertiary.innerHTML = $options;
  } catch (err) {
    let message = err.statusText || "Ha ocusrrido un error";
    $selectTertiary.nextElementSibling.innerHTML = `Error ${err.status}: ${message}`;
  }
};

d.addEventListener("DOMContentLoaded", loadStates());

$selectPrimary.addEventListener("change", (e) => loadTowns(e.target.value));
$selectSecondary.addEventListener("change", (e) => loadSuburbs(e.target.value));
