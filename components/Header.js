import { regions } from "../constants/region-data";
function Header({ setTheme, theme, searchCountries, changeRegion}) {
  return (
    <div>
      <div className="flex py-7 px-2 justify-between shadow-lg bg-white dark:bg-slate-700 dark:text-white ">
        <h1 className="font-bold ">REST Countries API</h1>

        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=""
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            Dark Mode
          </button>
        </div>
      </div>
<div className="flex justify-between items-center mx-10">
      <div className="relative py-3 my-5 mx-5">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-600 dark:text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="2 2 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          className="w-full md:w-[35rem]  block p-4 pl-20 text-sm dark:placeholder-white dark:bg-slate-700 dark:text-white text-gray-700 bg-white rounded-lg shadow focus:outline-none"
          placeholder="Search for a country..."
          onChange={(e) => searchCountries(e.target.value)}
        />
      </div>
    
      <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="  text-black shadow bg-white hover:bg-blue-100/10 focus:outline-none font-medium rounded-lg px-8 text-base py-5 text-center inline-flex items-center dark:bg-slate-700 dark:text-white" type="button">Filter By Region <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

<div id="dropdown" className="hidden z-10 w-52 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"  data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
    {regions.map((region) => (
      <li key={region.value}>
        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-medium" value={region.value} onClick={(e) => changeRegion(region.value)}>{region.region} </a>
      </li>
      ))}
    </ul>
</div>

      
      </div>
    </div>
  );
}

export default Header;
