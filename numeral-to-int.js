var romanToInt = function (s) {
   let numerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
   }

   let integer = 0

   for (i = 0; i < s.length; i++) {
      let current = numerals[s[i]]
      let next = numerals[s[i + 1]]

      if (next && current < next) {
         integer -= current
      } else {
         integer += current
      }
   }
   return integer
}