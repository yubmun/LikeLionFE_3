const backMoney = document.querySelector('#back-money');
const addMoneyInput = document.querySelector('#input-how-much');
const balanceMoney = document.querySelector('#balance-money');
const inputMoney = document.querySelector('#input-money');
const haveMoney = document.querySelector('#have-money');
const getItem = document.querySelector('#get-item');

backMoney.onclick = function(e){
  e.preventDefault();
  let balance = parseInt(balanceMoney.innerHTML);
  let have = parseInt(haveMoney.innerHTML);
  haveMoney.innerHTML = have + balance;
  balanceMoney.innerHTML = 0;
}

inputMoney.onclick = function(e){
  e.preventDefault();
  if(parseInt(haveMoney.innerHTML) >= parseInt(addMoneyInput.value)){
    let money = parseInt(addMoneyInput.value);
    let have = parseInt(haveMoney.innerHTML);
    let bala = parseInt(balanceMoney.innerHTML);
    haveMoney.innerHTML = have - money;
    balanceMoney.innerHTML = bala + money;
    addMoneyInput.value = '';
  } else {
    alert('돈이 없다');
  }
}

const colaItem = document.querySelector('#cola-item');

colaItem.onclick = function(e){
  e.preventDefault();
  console.log('찍히나?');
}

