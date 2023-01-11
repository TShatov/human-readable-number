module.exports = function toReadable (number) {

  let individualNumbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };

  let endingNum;
  let dozenNum;
  let decadeNum;
  let hundredNum;
  let spellingNum;

  function hundreds(number) {
    hundredNum = String(number).slice(0,1);
  };


  if (number <= 20) {
    return individualNumbers[number];
  } else if (number > 20 && number <= 99) {
    if (number % 10 == 0) {
      return individualNumbers[number];
    } else {
      decadeNum = String(number).slice(0,1) + 0;
      endingNum = String(number).slice(1);
      spellingNum = `${individualNumbers[Number(decadeNum)]} ${individualNumbers[Number(endingNum)]}`;
      return spellingNum;
    }
  } else if (number >= 100 && number < 1000) {
    if (number % 100 == 0) {
      hundreds(number);
      return `${individualNumbers[Number(hundredNum)]} hundred`;
    } else {
      hundreds(number);
      endingNum = String(number).slice(2);
      decadeNum = String(number).slice(1,2) + 0;

      if (String(number).slice(1,2).includes(0)) {
        spellingNum = `${individualNumbers[Number(hundredNum)]} hundred ${individualNumbers[Number(endingNum)]}`;
        return spellingNum;
      } else if (String(number).slice(2).includes(0)) {
        spellingNum = `${individualNumbers[Number(hundredNum)]} hundred ${individualNumbers[Number(decadeNum)]}`;
        return spellingNum;
      } else if (String(number).slice(1,2).includes(1)) {
        dozenNum = String(number).slice(1);
        spellingNum = `${individualNumbers[Number(hundredNum)]} hundred ${individualNumbers[Number(dozenNum)]}`;
        return spellingNum;
      } else {
        spellingNum = `${individualNumbers[Number(hundredNum)]} hundred ${individualNumbers[Number(decadeNum)]} ${individualNumbers[Number(endingNum)]}`;
        return spellingNum;
      }
    }
  }
}