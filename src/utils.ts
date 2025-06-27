/* eslint-disable @typescript-eslint/no-explicit-any */
type Country = {
  __typename: "country";
  name: string;
  id: string;
  flagUrl: string;
  independent: boolean;
  unMember: boolean;
  region: string;
  capital: string;
  subregion: string;
};

export const getCountriesFromRawData = (raw: any[]): Country[] => {
  return raw.map((value: any) => ({
    __typename: "country",
    name: String(value.name.common),
    id: String(value.cca2).toLowerCase(),
    independent: Boolean(value.independent),
    unMember: Boolean(value.unMember),
    flagUrl: `https://flagcdn.com/${String(value.cca2).toLowerCase()}.svg`,
    region: String(value.region),
    capital: value.capital.length ? String(value.capital[0]) : "",
    subregion: String(value.subregion),
  }));
};
