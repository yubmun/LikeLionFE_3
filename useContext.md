# useContext란?

Context라는 개념이 있기 전의 React는 State를 부모요소에서 자식요소로 props를 넘겨주어, 정보를 공유, 수정하였습니다.

비교적 작은 규모의 프로젝트의 경우, 데이터를 주고 받을 때엔 props가 매우 유용하게 쓰이지만, 프로젝트의 규모가 커지면 어떨까요?




그래서 React에서는 Context를 사용하게 되었다.


props를 부모 컴포넌트에서 자식 컴포넌트로 내려줘야 하는데, 프로젝트의 규모가 커지게 되면, 이 과정이 매우 깊어진다. (하나의 데이터만 내려주는데, 10단계의 컴포넌트를 거친다고 생각해보면, 매우 비효율적이라고 느낄 수 있다. 이외에 어떤 가시화된 자료를 보여주자)

그니깐 Context는 많은 컴포넌트에서 사용하는 데이터를 반복적인 Props 전달 없이 공유가 가능하다는 것이다.

<hr/>
