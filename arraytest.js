// Sum of Array Elements: Write a function to calculate the sum of all elements in an array of integers.

/*function sumofelemets(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const Array = [1,2,3,4,5];
console.log(sumofelemets(Array));*/

//  Average of Array Elements: Write a function to calculate the average of all elements in an array of integers.

/* function averageofelements(arr) {
     let sum = 0;
     for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        var Avg = sum / arr.length;
     }
     return Avg;
}
const Array = [4,7,2,8,3];
console.log(averageofelements(Array)); */

//  Find Maximum Element: Write a function to find the maximum element in an array of integers.

/* function maxelement(arr) {
    let max = arr[0];

    for(let i = 1; i< arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
const Array = [4,7,2,8,3];
console.log(maxelement(Array)); */

//Find Minimum Element: Write a function to find the minimum element in an array of integers.

/*function minelement(arr)
{
    let min = arr[0];

    for(let i=1; i<arr.length; i++)
    {
        if(arr[i] < min)
        {
            min = arr[i];
        }
    }
    return min;
}

const Array = [6,3,1,2,9];
console.log(minelement(Array));*/

// Array Search: Write a function to search for a given element in an array and return its index if found, otherwise return -1.

/*function searcharray(arr) {
    let A = 5;
    let index;

    for(let i=0; i<arr.length; i++){
        if(arr[i] == A){
            index = i;
        }
        else{
            index = -1;
        }
    }
    return index;
}
const Array = [7,4,5,3,2];
console.log(searcharray(Array));*/

// Array Sorting: Write a function to sort an array of integers in non-decreasing order (ascending).

/*function sortArray(arr){
    let S = arr.sort();
    return S;
}
const Array = [3,5,6,5,4];
console.log(sortArray(Array));*/


//Array Filtering: Write a function to filter out even numbers from an array of integers and return a new array containing only the even numbers.

// function filterArray(arr) {
//     function evennum(num){
//         return num % 2 === 0;
//     }

//     let F = arr.filter(evennum);
//     return F;
// }
// const array = [1, 3, 2, 6, 8, 4, 9];
// console.log(filterArray(array));








