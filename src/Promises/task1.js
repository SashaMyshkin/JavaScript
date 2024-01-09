const fetchData1 = () => new Promise(resolve => setTimeout(() => resolve("Data from API 1"), 1000)); //returns Promise
const fetchData2 = () => new Promise((resolve, reject) => setTimeout(() => reject("Error in API 2"), 1500)); //returns Promise
const fetchData3 = () => new Promise(resolve => setTimeout(() => resolve("Data from API 3"), 3000)); //returns Promise

const aggregateData = (sources) => {
    const timeout = 2000; // 2 seconds timeout
    const promisesWithTimeout = sources.map((source, index) => 
      Promise.race([
        source().catch(() => null), // Catch individual errors and return null
        new Promise((_, reject) => setTimeout(() => reject(`Timeout for API ${index}`), timeout))
      ])
      .catch(() => null) // Handle timeout as a rejection and return null
    );

    const resolvedValues = Promise.all(promisesWithTimeout).then(data => {
        return data.reduce((accumulator, currentResult, index) => {
            accumulator[index] = currentResult;
            return accumulator;
        }, {});
    });
    
    return resolvedValues;

}

aggregateData([fetchData1, fetchData2, fetchData3])
  .then(data => console.log(data));