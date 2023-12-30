fetch('https://restcountries.com/v3.1/capital/belgrade')
.then(response => response.json())
.then(data => console.log(data))
.catch(data => console.log(data))


async function getCountryDetailsByCapital(capital:string) {

    try { 
        const response = await fetch(`https://restcountries.com/v3.1/capital/${capital}`);
        const data = await response.json();
        console.log(data);    
    } catch (error) {
        console.error(error);
    }
   
} 

getCountryDetailsByCapital('belgrade');
