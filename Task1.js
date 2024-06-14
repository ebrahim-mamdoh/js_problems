//1.	Write a JavaScript function to calculate the sum of two numbers.  
function summetion(x, y) {
    return x + y;
}
console.log(summetion(3, 4));


// 2.	Write a JavaScript function to check if a given string is a palindrome.






// 3.	Write a JavaScript program to reverse a given string.  

function reverseString(str) {

    let x = str.split('');
    x.reverse();
    let reversedString = x.join('')
    return reversedString

}

console.log(reverseString('miharbe'));


// 4.Write a JavaScript function that takes an array of numbers and returns anew array with only the even numbers.  

function evenNum(arr) {

    return arr.filter(
        function (number) {
            return number % 2 === 0;
        }
    )
}

console.log(evenNum([1, 2, 3, 4, 5, 6]));


// 5.	Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original.  


function cleerReference(obj) {
    const x = JSON.stringify(obj)
    const y = JSON.parse(x)
    console.log(y);
}


//6.	Implement a function to reverse a string without using the built-in reverse () method.  

function reverser(str) {
    let newStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }

    console.log(newStr);
}


reverser('huodmam')


// 7.	Implement a function to find the sum of all the numbers in an array.  

function summOfArray(arr) {
    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    console.log(sum);

}
summOfArray([1, 4, 5])



// 8.	Write a function that accepts a number and returns its factorial (e.g., factorial of 5 is 5 x 4 x 3 x 2 x 1).  

function factorial(num) {

    let result =1
    for (i=1 ;i<= num;i++){
        result *=i
    }
    console.log(result);
}

factorial(5)



// 9.	Implement a function that returns the average value of numbers in an array.

function average(arr){
    
    let sum=0
    for( let i=0  ;i<arr.length ;i++){
        sum +=i
    }
    let res =sum/arr.length
    console.log(res);
}
average([2,4,7,8])

// 10.	Implement a function that finds the index of a specific element in an array. 
