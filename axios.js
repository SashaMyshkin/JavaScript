import axios from 'axios';

axios.get('https://restcountries.com/v3.1/capital/belgrade')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });

async function getCountryDetailsByCapital(capital) {
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/capital/${capital}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getCountryDetailsByCapital('Belgrade');
