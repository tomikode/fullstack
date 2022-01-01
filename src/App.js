import { useEffect, useState } from 'react';
import axios from 'axios';
import Country from './components/Country';

function App() {

  const [results, setResults] = useState([]);
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
    .then(res => {
      setCountries(res.data);
    })
  }, []);

  const onChange = (event) => {
    event.preventDefault();
    const name = event.target.value;
    const temp = countries.filter(country => 
      country.name.common.includes(name));
    setResults(temp);
  }

  const showCountry = (country) => {
    setResults(results.filter(coun => 
      coun.name.common === country.name.common
    ))
  }


  return (
    <div>
      <p>Find countries</p><input type="text" id="search" onChange={(event) => onChange(event)}></input>
      {results.length > 10 ? <p>More than 10 countries found</p> : null}
      {results.length > 1 && results.length <= 10 ? results.map(country => 
      <p key={country.name.common}>{country.name.common} 
      <button onClick={() => showCountry(country)}>show</button> </p>): null}
      {results.length === 1 ? 
      <Country country={results[0]}></Country> : null}
    </div>
  );
}

export default App;
