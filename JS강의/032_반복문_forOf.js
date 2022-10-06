let data = {
  'one' : '하나',
  'two' : '둘',
  'three' : '셋',
  'four' : '넷'
};

// for (const i of data){
//   console.log(data[i]);
// }

let x = {...data};
console.log(x);