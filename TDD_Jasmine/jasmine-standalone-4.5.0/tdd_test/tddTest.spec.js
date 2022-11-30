// 자스민 라이브러리에서 만들어진 함수. describe()
// describe() : 테스트할 유닛들의 모음
describe('자스민 테스트입니다.', ()=>{
  
  // it 함수 : 함수의 테스트 유닛입니다.
  // 첫번째 인자로 함수의 설명, 두번째 인자로 테스트할 함수를 전달 합니다.
  it('더하기 1을 하는 함수입니다.', ()=>{
    const num = 30
    // expect() : 기대식. 실행할 함수의 결과값을 인자로 전달
    // toBe() : 매쳐 함수, 내가 기대한 결과가 일치하는지 판단하는 함수
    expect(plusOne(num)).toBe(num + 1);
  })
})