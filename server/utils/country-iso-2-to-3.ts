import { countryISOMapping } from './constants';

export const getCountryISO3 = (countryCode: string) => {
  return countryISOMapping[countryCode as keyof typeof countryISOMapping];
};
