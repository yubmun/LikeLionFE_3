class Vendingmachine{
  constructor(){
    const vMachine = document.querySelector('.vending-machine');
    this.balance = vMachine.querySelector('.txt-balance');
    this.itemList = vMachine.querySelector('.list-item');
    this.inputCostEl = vMachine.querySelector('.inp-put');
    this.btnPut = vMachine.querySelector('.btn-put');
    this.btnReturn = vMachine.querySelector('.btn-return');
    this.btnGet = vMachine.querySelector('.btn-get');
    this.stagedList = vMachine.querySelector('.list-item-staged');

    const myInfo = document.querySelector('.my-info');
    this.myMoney = myInfo.querySelector('.txt-mymoney');
    this.gotList = myInfo.querySelector('.list-item-staged');
    this.txtTotal = myInfo.querySelector('.txt-total');
  }
  setup(){
    this.bindEvents();
  }

  // 선택한 음료수 목록 생성
  stagedItemGenerator(target){
    const stagedItem = document.createElement('li');
    stagedItem.dataset.item = target.dataset.item;
  }

  bindEvents(){
    /**
     * 1. 입금 버튼 기능
     * 입금액을 입력하고 입금 버튼을 누르면 소지금 == 소지금 - 입금액, 잔액 == 기존잔액 + 입금액이 됩니다.
     * 입금액이 소지금 보다 많다면 실행을 중단하고 "소지금이 부족합니다."라는 경고창을 띄운다.
     * 입금액 인풋창은 초기화 된다.
     */
    this.btnPut.addEventListener('click', (event)=>{
      const inputCost = parseInt(this.inputCostEl.value);
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',',''));
      const balanceVal = parseInt(this.balance.textContent.replaceAll(',',''));
      if(inputCost){
        // 입금액이 소지금보다 적다면
        if(inputCost <= myMoneyVal && inputCost > 0){
          this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - inputCost) + ' 원';
          this.balance.textContent = new Intl.NumberFormat().format((balanceVal ? balanceVal : 0) + inputCost) + ' 원';
        } else{
          alert('소지금이 부족합니다.');
        }
        this.inputCostEl.value = null;
      }
    });

    /**
     * 2. 거스름돈 반환 버튼 기능
     * 반환버튼을 누르면 소지금 == 소지금 + 잔액이 됩니다.
     * 반환버튼을 누르면 잔액 창은 초기화 됩니다.
     */
    this.btnReturn.addEventListener('click', (event)=>{
      const balanceVal = parseInt(this.balance.textContent.replaceAll(',',''));
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',',''));

      if(balanceVal){
        this.myMoney.textContent = new Intl.NumberFormat().format(balanceVal + myMoneyVal) + ' 원';
        this.balance.textContent = '원'
      }
    })

    /**
    * 3. 자판기 메뉴 기능
    * 아이템을 누르면 잔액 == 잔액 - 아이템 가격이 됩니다.
    * 아이템 가격보다 잔액이 적다면 "잔액이 부족합니다. 돈을 입금해주세요" 경고창이 나타납니다.
    * 아이템이 획득가능 창에 등록됩니다.
    * 아이템 버튼의 data-count 값이 -1 됩니다.
    * 만약 data-count 값이 0 이라면 부모 li에 sold-out 클래스를 붙여줍니다.
    */
    const btnsCola = this.itemList.querySelectorAll('button');
    btnsCola.forEach((item)=>{
      item.addEventListener('click', (event)=>{
        const targetEl = event.currentTarget;
        const balanceVal = parseInt(this.balance.textContent.replaceAll(',',''));
        let isStaged = false; // 이미 선택되었는가?
        const targetElPrice = parseInt(targetEl.dataset.price);
        const stagedListItem = this.stagedList.querySelectorAll('li');

        // 입금한 금액 
        if(balanceVal >= targetElPrice){
          this.balance.textContent = new Intl.NumberFormat().format(balanceVal - targetElPrice) + ' 원';

          if(!isStaged){
            this.stagedItemGenerator(targetEl);
          }

        } else{
          alert('잔액이 부족합니다. 돈을 입금해주세요.');
        }
      })
    })
  }
}

export default Vendingmachine;