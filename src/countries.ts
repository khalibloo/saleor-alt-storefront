import { countries, Country as CountryType } from "countries-list";

interface Country extends CountryType {
  code: string;
}
const codes = Object.keys(countries);
const list: Country[] = codes.map(code => ({
  ...countries[code],
  code,
}));

list.sort((a, b) =>
  new Intl.Collator(navigator.language.substr(0, 2), {
    sensitivity: "base",
  }).compare(a.name, b.name),
);

export default list;
