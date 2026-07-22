import React,{useState} from 'react'

const CountryCity = () => {
    const countryData = {
        India : ["chennai", "mumbai", "Delhi"],
        USA: ["New York" , "chicago" , "Los Angeles"],
        Canada : ["Toronto", "vancouver", "Montreal"]
    };
    const [country , setCountry] = useState("");
    const [city,setCity] = useState("");

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
        setCity("");

    }
    const cities = countryData[country] || [];
  return (
    <div>
        <h2>Country & City DropDown</h2>
        <select value = {country} onChange={handleCountryChange}>
            <option value="">Select Country</option>
            {Object.keys(countryData).map((countries)=> (
                <option key={countries} value={countries} >{countries}</option>
            ))}
        </select>
        <select name="" id="" value={city} onChange={(e) =>setCity(e.target.value)}>
            <option value="">Select City</option>
            {cities.map((city1) => (
                <option value={city1} key={city1}>
                    {city1}
                </option>
            ))}
        </select>
        <div>
            <p>Selected Country : {country}</p>
            <p>Selected City : {city} </p>
        </div>
    </div>
  )}

export default CountryCity