// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming
function longest_word(str)
{
    
   
    let subString = str.split(' ');
    let larger = subString[0];
    for(let i=0;i<subString.length;i++)
     {
        
       if(subString[i].length>larger.length)
       {
          larger=subString[i];
          
       }
     }
     return larger;
     
     

}
let max = longest_word('I am learning Programming to become a programmer');
console.log(max);