function belongToFibonacci(numberToCompare) {
  let isFib = false;
  let lastNum = 0;
  let fibNumber = 1;

  while (fibNumber <= numberToCompare) {
    if (fibNumber === numberToCompare) {
      isFib = true;
    }

    fibNumber += lastNum;
    lastNum = fibNumber - lastNum;
  };

  if (isFib || numberToCompare === 0) {
    console.log("O número " + numberToCompare + " está contido na sequência Fibonnacci")
  } else {
    console.log("O número " + numberToCompare + " NÃO está contido na sequência Fibonnacci")
  }
}

belongToFibonacci(0) // true
belongToFibonacci(3) // true
belongToFibonacci(6) // false
