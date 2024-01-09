const fetchData1 = () => new Promise(resolve => setTimeout(() => resolve("Data from API 1"), 1000)); //returns Promise
const fetchData2 = () => new Promise((resolve, reject) => setTimeout(() => resolve("Error in API 2"), 1500)); //returns Promise
const fetchData3 = () => new Promise(resolve => setTimeout(() => resolve("Data from API 3"), 3000)); //returns Promise

async function executeSequentially(funcs) {
    const results = []

    for (const func of funcs) {
        try {
            results.push(await func());
        } catch (err) {
            results.push(err);
        }
    }

    return results
}

/*We could also use Promise.all() method*/
async function executeInParallel(funcs) {

    const results = funcs.map(func => func());
    const resolved = [];

    for (const result of results) {
        try {
            resolved.push(await result);
        } catch (err) {
            resolved.push(err);
        }
    }

    return resolved
}

executeSequentially([fetchData1, fetchData2, fetchData3])
    .then(data => console.log(data, 'executeSequentially'));

executeInParallel([fetchData1, fetchData2, fetchData3])
    .then(data => console.log(data, 'executeInParallel'));