### sort
- 배열에서 sort 메서드를 쓰면 정렬이 됨.
- sort()만 쓰면, 아규먼트를 하나도 넣지 않으면, 유니코드에 정렬된 대로 문자열 순서에 따라 정렬이 됨.
- 문자열을 정렬할때는 그냥 쓰면 됨

- 숫자를 정리할때 오름차순으로
  - arr.sort((a,b) => a+b);
- 숫자를 정리할때 내림차순으로
  - arr.sort((a,b) => b-a);

- 따로 저장하지 않으면 원본배열이 정렬됨.

### reverse
- 배열의 순서를 뒤집는 메서드
- 파라미터가 없어서 호출만 해주면 됨.
- 따로 저장해주지 않으면 원본배열이 뒤집어짐

### Map
- Object 객체는 property name 을 통해서 접근
- Array 배열은 index를 통해 접근
- Map은 또 새로운 데이터 구조임.
  - Map 에서는 점 표기법이나 대괄호 표기법으로 접근하는게 아니고 메서드로 접근함.
  - map.set(key, value) : key를 이용하여 value를 추가하는 메서드
  - map.get(key) : key에 해당하는 값을 얻는 메서드, key가 없다면 undefined반환
  - map.has(key) : key가 존재하면 true 없으면 false를 반환하는 메서드
  - map.delete(key) : key의 값에 해당하는 값을 삭제하는 메서드
  - map.clear() : Map안의 모든 요소를 제거하는 메서드
  - map.size : 요소 개수를 반환하는 프로퍼티(얘는 메서드가 아님, length와 같은 역할)

### Set
- 중복되는 값이 없으며, 순서대로 저장함.
- Array메서드 쓸 수 없으며 Set만의 메서드가 있음.

  - set.add(value) : 값을 추가하는 메서드, 메서드를 호출한 자리에는 추가된 값을 가진 Set자신을 반환함.
  - set.has(value) : Set안에 값이 존재하면 true 없으면 false
  - set.delete(value) : 값을 제거함 제거에 성공하면 true, 아니면 false
  - set.clear() : Set안에 모든 요소 제거
  - set.size : length와 같은 역할

  - Object, Array, Map 모두 개별값에 접근할 수 있지만, Set은 접근할 수 없음. 단, 반복문으로 한꺼번에 모든 요소를 다룰때 접근할 수 있음.