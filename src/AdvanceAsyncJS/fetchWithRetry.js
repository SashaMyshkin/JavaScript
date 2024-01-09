//

function fetchWithRetry(url, retries) {

    retries--;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDQ0MzcwYzZhZTE3YzdjYTAwYzZlMDcxZTNhMjkwNCIsInN1YiI6IjY1OTk0ODU1N2Q1NTA0MDA5NjM1YWNmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j_xY34WslIVJfQptxbgj4RfAbQ1CWorVWVGl8U6adLk'
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => {
            if (retries >= 0) {
                //console.log('Attempt:' + retries);
                fetchWithRetry(url, retries)
            }
            else {
                console.log('Error: ' + err);

            }
        });
}

fetchWithRetry('https://api.themoviedb.org/3/genre/movie/list?language=sr', 5);