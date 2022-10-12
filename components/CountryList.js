import { useState, useEffect } from 'react';
import Card from './Card';

const CountryList = ({countries, countriesCount}) => {
    return ( 
        <div className='flex flex-wrap gap-y-10 gap-x-4 justify-evenly shadow-white'>
  {countries.slice(0, countriesCount).map((country) => (
    <Card key={country.name.common} country={country} />
      ))}
      </div>
     );
}
 
export default CountryList;