const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    // console.log(countries[99].name.common);
    const countriesDiv = document.getElementById('countries-div');

    for (const country of countries){
        // console.log(country.name.common)
        // console.log('single country', country.capital, country.name);
        const div = document.createElement('div');
        div.classList.add('country-css');
        div.innerHTML = ` 
            <h3>${country.name.common}</h3>
            <img src="${country.flags.png}" />
            <button class="d-block btn btn-primary border-none py-3 px-5  mt-3" onclick="loadCountryByName('${country.name.common}')">Details</button>
        `;
        countriesDiv.appendChild(div);
        
    }
    // console.log(country.flags.png)
    // console.log(countries[0].continents[0])
}
// country name country[0].continents[0]  // country.continents[0]
// flag parameter data[0].flags.png  // country.flags.png

const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch (url)
    .then(res => res.json()
    .then(data => displayCountryDetails(data[0])))
}
// capital of country data[0].capital[0]

const displayCountryDetails = countryDetails => {
    console.log(countryDetails.capital[0]);
}