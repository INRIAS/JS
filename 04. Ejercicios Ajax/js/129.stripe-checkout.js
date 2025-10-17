import STRIPE_KEYS from "../assets/129.secret_keys.js";

const d = document,
  $tacos = d.getElementById("tacos"),
  $template = d.getElementById("taco_template"),
  $fragment = d.createDocumentFragment(),
  fetchOptions = {
    headers: {
      Authorization: `Bearer ${STRIPE_KEYS.secret}`,
    },
  };

let products, prices;

Promise.all([
  fetch("https://api.stripe.com/v1/products", fetchOptions),
  fetch("https://api.stripe.com/v1/prices", fetchOptions),
])
  .then((responses) => Promise.all(responses.map((res) => res.json)))
  .then((json) => {
    console.log(json);
    // products = json[0].data
  });
