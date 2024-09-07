// Task-3:
// Write a function to count the number of vowels in a string.
function num_ofVowels(str)
{
   
  let count = 0;
  for(let i=0;i<str.length;i++)
  {
    if(str[i]==='a'||str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u')
    {
      count++;

    }
    
  }
  return count;
  

}
let vowels = num_ofVowels('apple remains multivitamins but orange is sour jam.');
console.log(vowels)