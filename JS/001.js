let word = 'abbabba';
let searchWord = 'a'
let count = 0;

for (let i = 0; i < word.length; i++) {
  if (word[i] !== searchWord) {continue;}
  count++;
}
console.log(count);

let x = 10;

x = 10 + '';

console.log(typeof x, x);

let y = typeof x;
console.log(y);
if(y === 'string'){
  console.log('string이 맞네');
}