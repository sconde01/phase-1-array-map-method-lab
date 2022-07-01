const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () =>  {
 return tutorials.map((string) => string.split (" ").map((letter) => letter[0].toUpperCase() + letter.substring(1)).join(" "))
}
  

  //something like this originally passed but I messed it up when I talked to Jennifer and she taught me the above one.
  // const titleCased = tutorials =>  {
  //   return tutorials.map((string) => {
  //     const words = string.split (" ");
  //     const capWords = words.map((letter) => {
  //       return letter[0].toUpperCase() + letter.substring(1);
  //     })
   
  //     const capLetter = capWords.join(" ");
  //     return capLetter
  //   }
  //    )}
  
 
//const titleCased =  

// function titleCased(tutorials) {
// return tutorials.toLowerCase().split(' ').map(function(word) {
// return (word.charAt(0).toUpperCase() + word.slice(1));
// }).join(' ');
// }
//titleCased(tutorials);


//function titleCase(str) {
  //return str.toLowerCase().split(' ').map(function(word) {
    //return (word.charAt(0).toUpperCase() + word.slice(1));
  //}).join(' ');
//}
//titleCase("I'm a little tea pot");