import React from 'react'

const Country = ({ country }) => {

    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h3>languages</h3>
            {Object.entries(country.languages).map(lang => <p key={lang[1]}>{lang[1]}</p>)}
            <img src={country.flags.png}></img>
        </div>
    )
}

export default Country
