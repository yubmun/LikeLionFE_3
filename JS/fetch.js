/**
 * fetch는 무엇인가?
 * 서버에 request를 보내고 response를 받는 함수이다.
 * 
 */

fetch('https://www.google.com')
.then((response) => response.text())
.then((result) => {console.log(result); });

/**
 * response를 매개변수로 받는 함수는 fetch를 통해 response가 있다면 실행되는 함수이다. 이를 콜백함수라고 하며, 요청이 있을때 실행됨을 알아야한다.
 * then절로 계속 넘어가기 때문에, 첫번째 then에서의 return 값은 아래 then의 result가 된다.
 * 
 */

/**
 * URL이란 무엇인가 (Uniform Resource Locator)
 * 웹에 존재하는 특정 데이터를 나타내는 문자열.
 * 호스트, 패스, 쿼리로 이루어져있음.
 * Host Path Query
 * 
 * https 는 뭘까?
 * 스킴이라고 불리며, 프로토콜의 이름이 들어간다.
 * 프로토콜은?
 * 통신을 하는 두 주체가 지켜야하는 통신 규약이다.
 * 웹과 서버가 지켜야하는 규약이라고 이해하자.
 * 
 * http
 * Hyper Text Transfer Protocol
 * 
 * https
 * Hyper Text Transfer Protocol Secure
 * 
 */