module.exports = function toReadable (number) {
  const units = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen','eighteen',
    'nineteen'
  ];
  const dozens = [
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
  ];


  number = number.toString()
  char1 = number[0];
  char2 = number[1];
  char3 = number[2];

  if (number === '0') {
     return 'zero'
    } else if (number < 20) {
       return units[[number] -1]

    } else if (number >= 20 && number < 100 && char2 === '0') {
            return `${dozens[[char1] -1]}`

    } else if (number >= 20 && number < 100) {
            return `${dozens[[char1] -1]} ${units[[char2] -1]}`

    } else if (number > 99 && number[1] == '0' && number[2] == '0'){
            return `${units[[char1] -1]} hundred`

    } else if (number > 99 && number[1] == '0') {
            return `${units[[char1] -1]} hundred ${units[[char3] -1]}`
     } else if (number > 99 && number[2] == '0') {
            return `${units[[char1] -1]} hundred ${dozens[[char2] -1]}`



          } else if (number > 99 && number[1] == '1') {
           numberList = number.split('')
            return `${units[[char1] -1]} hundred ${units[[Number(numberList.slice(1, numberList.length).join(''))] -1]}`

          } else if (number > 99 && number[2] >= '1') {

            return `${units[[char1] -1]} hundred ${dozens[[char2]- 1]} ${units[[char3] -1]}`
          }
    }