import Image from "next/image";
const Card = ({country}) => {
    return ( 
        <div className="w-80">
         <img src={country.flags.png}  alt="flag" className='rounded-t w-80 h-40' /> 
            <div className="w-80 bg-white dark:bg-slate-700 dark:text-white text-grey-900 px-2 py-4 shadow-2xl">
                <h2 className="py-2 font-bold text-lg">{country.name.common}</h2>
                <p className="font-semibold">Population: <span className="font-light">{country.population}</span></p>
                <p className="font-semibold">Region: <span className="font-light">{country.region}</span></p>
                <p className="font-semibold">Capital: <span className="font-light">{country.capital}</span></p>
            </div>
        </div>
     );
}
 
export default Card;