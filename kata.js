//Kata 13 - JS Object From URL Encoded String

////Create a function named urlDecode that will receive a URL encoded string, and return the a JavaScript object that represents that data.

// - %20 represents a space character
// - Key-value pairs are represented using an = character: key=value
// - Multiple key-value pairs are separated using a & character: key1=value1&key2=value2

const urlObject = {};
const urlDecode = function(text) {
  const regex = /&/gi;
  let strNoAnds = text.replace(regex, '=');

  let strSplit = strNoAnds.split('=');

  let strSplitWithSpaces = [];//create loop to replace %20 with spaces
  for (let element of strSplit) {
    let regex = /%20/gi;
    strSplitWithSpaces.push(element.replace(regex, " "));
  }

  strSplitWithSpaces.forEach((element, index) => {
    if (index % 2 === 0) {
      urlObject[element] = strSplitWithSpaces[index + 1];
    }
  });

  return urlObject;
};
//Another Way to Solve
// const result = {};
// 'asd=asd&kjh=uiy'.split('&').forEach((element) => {
//   const [key, value] = element.split('='); // ['asd', 'asd']
//   result[key] = value;
// });

//Another Way to Solve
// const result = 'asd=123&kjh=uiy'.split('&').reduce((result, element) => {
//   const [key, value] = element.split('='); // ['asd', '123']
//   result[key] = value;
//   return result;
// }, {})


console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);