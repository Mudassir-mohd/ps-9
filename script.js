function findLargestSubarray(arr) {
    let maxSum = -Infinity; // Smallest possible value
    let currentSum = 0;
    let start = 0, end = 0, tempStart = 0; // Index tracking

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        if (currentSum > maxSum) { 
            maxSum = currentSum;
            start = tempStart; // Update start index
            end = i; // Update end index
        }

        if (currentSum < 0) { // Reset if sum becomes negative
            currentSum = 0;
            tempStart = i + 1; // Move start index to next element
        }
    }

    return {
        subarray: arr.slice(start, end + 1),
        startIndex: start,
        endIndex: end,
        maxSum: maxSum
    };
}

// Example Usage:
let arr = [-2, -3, 4, -1, -2, 1, 5, -3];
let result = findLargestSubarray(arr);

console.log("Largest Subarray:", result.subarray);
console.log("Starting Index:", result.startIndex);
console.log("Ending Index:", result.endIndex);
console.log("Maximum Sum:", result.maxSum);
