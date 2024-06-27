import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_t6DjL4tp8wZTKLkXnMjemPxpyPMFlJmeLJMVc9g9"
);

export const converCurrency = async (fromCurrency, toCurrency, units) => {
  const response = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });

  const multiplier = response.data[toCurrency];
  return multiplier * units;
};
