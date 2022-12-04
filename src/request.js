const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
        
    if (response.status === 200) {
            const data = await response.json()
            return data.puzzle
        } else {
            throw new Error ('unable to fetch the puzzle')
        }
    }


// const getPuzzle = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error ('unable to fetch the puzzle')
//         }
//     }).then((data) => {
//         return data.puzzle
//     })
// }

const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountryDetails(location.country)
    return country
}

const getCountryDetails = async (countryCode) => {
    const response = await fetch('//restcountries.com/v3.1/all')
        if (response.status === 200) {
          const data = await response.json()
          return data.find((country) => country.cca2 === countryCode)
        } else {
            throw new Error ('error')
        }
    }


// const getCountryDetails = (countryCode) => {
//     return fetch('https://restcountries.com/v3.1/all').then((response) => {
//         if (response.status === 200) {
//           return response.json()
//         } else {
//             throw new Error ('error')
//         }
//     }).then((data) => {
//         return data.find((myCountry) => myCountry.cca2 === countryCode)
//     })
// }


const getLocation = async () => {
    const response = await fetch('https://ipinfo.io/json?token=8cf91c373cee43')
  
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error ('Unable to fetch location')
        }
    }

// const getLocation = () => {
//     return fetch('https://ipinfo.io/json?token=8cf91c373cee43').then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error ('Unable to fetch location')
//         }
//     })
// }

// const getCountryDetails = (countryCode) => new Promise ((resolve, reject) => {
//     // const countryCode = 'PL'
//     const countriesRequest = new XMLHttpRequest()

//     countriesRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const countries = JSON.parse(e.target.responseText)
//         const myCountry = countries.find((myCountry) => myCountry.cca2 === countryCode)
//         resolve(myCountry.name.common)
//     } else if (e.target.readyState === 4) {
//         reject('error')
//     }
// })

// countriesRequest.open('GET', 'https://restcountries.com/v3.1/all')
// countriesRequest.send()
// })

export { getPuzzle as default}