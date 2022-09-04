let word = 'abbabba';
let searchWord = 'a'
let count = 0;

for (let i = 0; i < word.length; i++) {
  if (word[i] !== searchWord) {continue;}
  count++;
}
console.log(count);