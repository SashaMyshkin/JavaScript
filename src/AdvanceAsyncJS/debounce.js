function debounce1(func, delay) {
    let debounceTimer;
    return function () {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func(), delay);
    };
}


function debounce2(func, delay) {
    let debounceTimer;
    return function (...args) {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}