async function asyncFibonacci(n) {
   
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    if (n < 0) throw 'Invalid input: n should be a non-negative integer';
    if (n <= 1) return n;

    await delay(1000); // Delaying for 1 second

    
    let prev = 0, next = 1;
    for (let i = 2; i <= n; i++) {
        let temp = next;
        next = prev + next;
        prev = temp;
    }
    return next;
}


asyncFibonacci(10).then(result => console.log(`The 10th Fibonacci number is: ${result}`))
.catch(error => console.error(error));
