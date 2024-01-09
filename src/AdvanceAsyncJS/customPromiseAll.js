const fetchData1 = () => new Promise((resolve, reject) => setTimeout(() => resolve("API 1"), 1000));
const fetchData2 = () => new Promise((resolve, reject) => setTimeout(() => resolve("API 2"), 1500));
const fetchData3 = () => new Promise((resolve, reject) => setTimeout(() => resolve("API 3"), 3000));

/* This method executes all promises sequentiall, but Promise.all() executes them parallel.*/
/*const customPromiseAll = (promises) => {
    return new Promise((resolve, reject) => {
        const values = []

        promises.forEach(element => {
            element()
                .then((data) => {
                    values.push(data)
                    if (values.length === promises.length) resolve(values)
                })
                .catch((data) => reject(data))
        });
    });
}*/

function customPromiseAll(funcs) {

    const results = funcs.map(func => func());
    const values = [];

    return new Promise((resolve, reject) => {
        for (const result of results) {
            result.then((data) => {
                values.push(data);
                if (values.length === funcs.length) {
                    resolve(values);
                }
            }).catch((data) => reject(data));
        }
    });
}


customPromiseAll([fetchData1, fetchData2, fetchData3])
    .then((data) => console.log(data))
    .catch((data) => console.log(data))