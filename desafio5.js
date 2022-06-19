function reverseString1(str) {
  if (typeof str !== 'string') {
    return console.log('Not valid')
  }

  let strArray = str.split('');
  let reverseArray = [];

  strArray.forEach(char => reverseArray.unshift(char));

  console.log('Reverse String, function1 = ' + reverseArray.join(''));
}

function reverseString2(str) {
  let strArray = str.split('');
  let reverseArray = [];

  for (let i = 0; i < strArray.length; i++) {
    reverseArray.unshift(strArray[i]);
  }

  console.log('Reverse String, function2 = ' + reverseArray.join(''));
}

function reverseString3(str) {
  return (str === '') ? '' : reverseString3(str.substring(1)) + str.charAt(0);
}

function reverseString4(str) {
  let strArray = str.split('');
  let reverseString = '';

  for (let i = strArray.length - 1; i >= 0; i--) {
    reverseString += strArray[i];
  }

  console.log('Reverse String, function4 = ' + reverseString)
}


reverseString1(1234); //Not valid
reverseString1('1234');
reverseString1('abcd')
reverseString2('abcd')
console.log('Reverse String, function4 = ' + reverseString3('abcd'))
reverseString4('abcd')
