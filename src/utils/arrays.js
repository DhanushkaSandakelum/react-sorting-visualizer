// Function to get a random integer in a specified range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to populate an array with random integers
function getArrayWithRandomNumbers(length, min, max) {
    const randomArray = [];

    for (let i = 0; i < length; i++) {
        const randomInt = getRandomInt(min, max);
        randomArray.push(randomInt);
    }

    return randomArray;
}

function areArrayEqual(arr1, arr2){
    if(arr1.length !== arr2.length) return false

    for (let i = 0; i < arr1.length; i++) {
       if(arr1[i] !== arr2[i]) return false        
    }

    return true
}

export { getRandomInt, getArrayWithRandomNumbers, areArrayEqual }