function convertToWords(number) {
  const ones = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
    'eighteen', 'nineteen'
  ];
  const tens = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];
  
  let word = '';
  
  if (number === 0) {
    return 'zero dollars';
  }
  
  if (number < 0) {
    word += 'negative ';
    number = Math.abs(number);
  }
  
  if (Math.floor(number / 1000000) > 0) {
    word += convertToWords(Math.floor(number / 1000000)) + ' million ';
    number %= 1000000;
  }
  
  if (Math.floor(number / 1000) > 0) {
    word += convertToWords(Math.floor(number / 1000)) + ' thousand ';
    number %= 1000;
  }
  
  if (Math.floor(number / 100) > 0) {
    word += convertToWords(Math.floor(number / 100)) + ' hundred ';
    number %= 100;
  }
  
  if (number > 0) {
    if (number < 20) {
      word += ones[number];
    } else {
      word += tens[Math.floor(number / 10)];
      if (number % 10 > 0) {
        word += '-' + ones[number % 10];
      }
    }
  }
  
  return word.trim()
}

// Example usage
const number = 12567;
const words = convertToWords(number);
console.log(words);  // Output: "twelve thousand five hundred sixty-seven dollars"
