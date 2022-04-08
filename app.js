// #1
// new Set([1, 1, 2, 2, 3, 4])
// {1,2,3,4}


// #2
// [...new Set("referee")].join("")
// ['ref]


// #3
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// 0: {Array(3) => true}
// 1: {Array(3) => false}


// hasDuplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length
hasDuplicate([1, 3, 2, 1]) // true
hasDuplicate([1, 5, -1, 4]) // false


// vowelCount
function isVowel(char) {
   return 'aieou'.includes(char)
}
function vowelCount(str) {
   const vowelMap = new Map()
   for (let char of str) {
      let lowerChar = char.toLowerCase()
      if (isVowel(lowerChar)) {
         if (vowelMap.has(lowerChar)) {
            vowelMap.set(lowerChar, vowelMap.get(lowerChar) + 1)
         }
         else {
            vowelMap.set(lowerChar, 1)
         }
      }
   }
   return vowelMap
}

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }
