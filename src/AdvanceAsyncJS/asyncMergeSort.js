// Asynchronous helper function to simulate a delay in comparison
async function asyncCompare(a, b) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a - b);
        }, 1000); // Simulating a delay of 1 second
    });
}

// Asynchronous Merge function
async function asyncMerge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (await asyncCompare(left[leftIndex], right[rightIndex]) < 0) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // move left array cursor
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // move right array cursor
        }
    }

    // Concatenating the remaining elements
    // (in case we didn't go through the entire left or right array)
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
}

// Asynchronous MergeSort function
async function asyncMergeSort(unsortedArray) {
    // Base case or terminating case
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }

    const middle = Math.floor(unsortedArray.length / 2);

    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    // Using recursion to combine the left and right
    return await asyncMerge(
        await asyncMergeSort(left), await asyncMergeSort(right)
    );
}

// Example usage
(async () => {
    const sortedArray = await asyncMergeSort([4, 3, 2, 1]);
    console.log(sortedArray);
})();
