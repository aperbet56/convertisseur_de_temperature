// Récupération des éléments
const celsiusInput = document.querySelector("#celsuis");
const fahrenheitInput = document.querySelector("#fahrenheit");

//  Fonction celToFar qui va permettre de transformer les celsuis en fahrenheit
const celToFar = () => {
  let fahrenheit = (parseFloat(celsiusInput.value) * 9) / 5 + 32;
  fahrenheitInput.value = parseFloat(fahrenheit.toFixed(2));
  console.log(fahrenheit);
};

// Ecoute de l'événement input sur le champs celsuis et appel de la fonction celToFar
celsiusInput.addEventListener("input", celToFar);

// Fonction farToCel qui va permettre de transformer les fahrenheit en celsius
const farToCel = () => {
  let celsius = ((parseFloat(fahrenheitInput.value) - 32) * 5) / 9;
  celsiusInput.value = parseFloat(celsius.toFixed(2));
  console.log(celsius);
};

// Ecoute de l'événement input sur le champs fahrenheit et appel de la fonction farToCel
fahrenheitInput.addEventListener("input", farToCel);
