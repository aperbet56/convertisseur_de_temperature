// Récupération des éléments
const celsiusInput = document.querySelector("#celsuis");
const fahrenheitInput = document.querySelector("#fahrenheit");

// Déclaration de la fonction celsuisToFahrenheit qui va permettre de transformer les celsuis en fahrenheit
const celsuisToFahrenheit = () => {
  let fahrenheit = (parseFloat(celsiusInput.value) * 9) / 5 + 32;
  fahrenheitInput.value = parseFloat(fahrenheit.toFixed(2));
  console.log(fahrenheit);
};

// Ecoute de l'événement input sur le champs celsuis et appel de la fonction celsuisToFahrenheit
celsiusInput.addEventListener("input", celsuisToFahrenheit);

// Déclaration de la fonction fahrenheitToCelsuis qui va permettre de transformer les fahrenheit en celsius
const fahrenheitToCelsuis = () => {
  let celsius = ((parseFloat(fahrenheitInput.value) - 32) * 5) / 9;
  celsiusInput.value = parseFloat(celsius.toFixed(2));
  console.log(celsius);
};

// Ecoute de l'événement input sur le champs fahrenheit et appel de la fonction fahrenheitToCelsuis
fahrenheitInput.addEventListener("input", fahrenheitToCelsuis);
