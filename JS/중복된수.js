let arr = ['a','b','c','c','d','b','c']
let obj ={}
arr.forEach(el => {obj[el] = (obj[el] || 0) + 1});

/**
 * 1. obj[ ' a ' ] 에 값을 넣어주려고 함.

2. obj['a'] = obj['a'] + 1 은 obj라는 빈객체에 obj['a'] 값에 1을 더해 할당해준다. 라는 뜻을 가지고 있는데 맨 처음에 들어간 값은 빈 객체에 'a' 가 없으니깐 undefinded가 나옴

3. 즉 obj['a'] = undefined + 1 은 NaN으로 계산되어서 obj의 'a' 키 값에 undefined가 들어가게 됨. 이걸 막아주고자 이항 연산자를 씀

4. obj['a'] = (undefinded || 0 ) + 1 undefined는 falsy 값으로 또는 연산자를 만나면 뒤에걸 계산함 고로 0 +1 이 계산되어서 처음 발견된 요소는 1개의 수가 들어가는 것.

5. 그 이후에 'a'값을 발견했을때  obj['a'] = (obj['a'] || 0 ) + 1 을 계산할땐 이미 'a'에 1이라는 값이 들어가있어서 1 + 1이 계산되는것
 */