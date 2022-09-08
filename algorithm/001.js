// 자연수 N 이 주어졌을 때, N부터 1까지 한 줄에 하나씩 출력하는 프로그램을 작성하세요. (2742번)

//한 줄 입력

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a+b);
