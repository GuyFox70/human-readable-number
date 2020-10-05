module.exports = function toReadable(number) {
   const arrNumbers = {
      0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four',
      5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
      10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen',
      15: 'fifteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty'
   };

   if ((number >= 0 && number <= 13) || number == 15) {
      return arrNumbers[number];
   } else if (number > 13 && number < 20 && number != 15) {
      return arrNumbers[String(number).slice(-1)].endsWith('t') ? arrNumbers[String(number).slice(-1)] + 'een' : arrNumbers[String(number).slice(-1)] + 'teen';
   } else if (number >= 20 && number <= 99) {
      return getTwoSignNumber(number, arrNumbers);
   } else if (number >= 100 && number < 1000) {
      if (parseInt(String(number).substr(1)) == 0) {
         return `${arrNumbers[String(number).substr(0, 1)]} hundred`;
      } else {
         return `${arrNumbers[String(number).substr(0, 1)]} hundred ${toReadable(parseInt(String(number).substr(1)))}`;
      }
   }
}

function getTwoSignNumber(number, arrNumbers) {
   if (arrNumbers[`${String(number).substr(0, 1)}0`]) {
      return String(number).slice(-1) == 0 ? arrNumbers[number] : arrNumbers[`${String(number).substr(0, 1)}0`] + ' ' + arrNumbers[String(number).slice(-1)];
   } else {
      if (arrNumbers[String(number).slice(0, 1)].endsWith('t')) {
         return String(number).slice(-1) != 0 ? `${arrNumbers[String(number).substr(0, 1)].slice(0, -1)}ty ${arrNumbers[String(number).slice(-1)]}` : `${arrNumbers[String(number).substr(0, 1)].slice(0, -1)}ty`;
      } else {
         return String(number).slice(-1) != 0 ? `${arrNumbers[String(number).substr(0, 1)]}ty ${arrNumbers[String(number).slice(-1)]}` : `${arrNumbers[String(number).substr(0, 1)]}ty`;
      }
   }
}
