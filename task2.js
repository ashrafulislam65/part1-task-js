// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0
function repeated(num)
{
    let count=0;
    let unique = [];
    for(let i=0;i<num.length;i++)
    {
        if(num.includes(num[i]))
        {
             count++;
           
        }
        

    }
    console.log(count)
    
    
}
 repeated([5,6,11,12,98,5]);
