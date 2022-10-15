import Head from "next/head";
import CountryList from "../components/CountryList";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {ALL_COUNTRIES, API_COUNTRY_REGION} from '../constants/endpoints'
import axios from "axios";

export default function Home() {
  const { theme, setTheme } = useTheme();
  let [countriesCount, setCountriesCount] = useState(12);
  const [activeBtn, setActiveBtn] = useState(true);
  const [countries, setCountries] = useState([]);
  const [isPending, setIsPending] = useState(true);
const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    setTimeout(() =>{
    axios.get(ALL_COUNTRIES).then((response) => {
      const countries = response.data;
      setCountries(countries);
      setIsPending(false);
      setError(null);
    }).catch((err) => {
      if (err.name === 'AbortError') {
        console.log('fetch aborted')
      } else {
        // auto catches network / connection error
        setIsPending(false);
        setError(err.message);
      }
    });
    
  });

  }, []);


  const handleLoadMore = () => {
    setActiveBtn(false);
    setTimeout(() => {
      setActiveBtn(true);
      setCountriesCount((countriesCount += 8));
    }, 120);
  };


  const searchCountries = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
    const filteredCountries  = countries.filter((country) => {
      return Object.values(country).join(" ").toLowerCase().includes(searchInput.toLowerCase());
    })
    console.log(filteredCountries)
    setFilteredResults(filteredCountries) }

    else {
      setFilteredResults(countries)
    }
  }


  const changeRegion = (region) => {
    axios.get(API_COUNTRY_REGION.replace('{region}', region)).then((response) => {
      const countries = response.data;
      console.log(countries)
      setCountries(countries);
      setIsPending(false);
      setError(null);
    } ).catch((err) => {
      if (err.name === 'AbortError') {
        console.log('fetch aborted')
      } else {
        setIsPending(false);
        setError(err.message);
      }
    }
    );
  }


  return (
    <div className="prose md:prose-xl dark:prose-dark dark:md:prose-xl-dark">
      <Head>
        <title>REST Countries API</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header setTheme={setTheme} theme={theme}  searchCountries={searchCountries} changeRegion={changeRegion} />

      {
        searchInput.length > 0 ? (
          <CountryList countries={filteredResults} countriesCount={countriesCount}/>
        ) : (
          <CountryList countries={countries} countriesCount={countriesCount}/>
      )}

      {error ?  <div className="text-center font-semibold text-2xl flex items-center justify-center mt-[10%] ">{`${error} : Check your internet connection`}</div>  :  isPending ? (
        <div className="text-center font-semibold text-2xl flex items-center justify-center mt-[10%] ">Loading...</div>
      ) : (
        <div className="flex justify-center items-center mt-5">
        <button
          type="button"
          className="p-3 rounded-lg border-1 text-sm font-semibold bg-slate-400 my-5"
          onClick={handleLoadMore}
        >
          Load More
        </button>
        </div>
      )}


   
    </div>
  );
}


