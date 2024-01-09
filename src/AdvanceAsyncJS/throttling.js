
const helloFromTheOtherSide = () => console.log("helloFromTheOtherSide");
const throttle = (callback, limit) => setInterval(callback, limit);

throttle(helloFromTheOtherSide, 1000);
