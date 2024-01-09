function fetchWithTimeout(url, timeout) {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDQ0MzcwYzZhZTE3YzdjYTAwYzZlMDcxZTNhMjkwNCIsInN1YiI6IjY1OTk0ODU1N2Q1NTA0MDA5NjM1YWNmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j_xY34WslIVJfQptxbgj4RfAbQ1CWorVWVGl8U6adLk'
        }
    };

    const fetchPromise = fetch(url, options)
        .then(response => response.json());

    const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Request timed out')), timeout);
    });
    
    return Promise.race([fetchPromise, timeoutPromise]);
}

fetchWithTimeout('https://api.themoviedb.org/3/genre/movie/list?language=sr', 5000)
    .then(data => console.log('themoviedb data:', data))
    .catch(error => console.error('Error:', error));
