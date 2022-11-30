class ViewManager{
  constructor(textManager, options){
    if(textManager.constructor !== TextManager){
      throw Error('textManager 객체를 전달해야합니다!')
      // 사용자 정의 에러 던짐.
    }

    if(!options.viewerEl || !options.btnEl || !options.inpTxt){
      throw Error('필요한 요소중에 빈 값이 존재합니다!')
    }

    this.inpTxt = options.inpTxt;
    this.viewerEl = options.viewerEl;
    this.textManager = textManager;

    options.btnEl.addEventListener('click', ()=>{
      this.changeValue();
    })
  }
  changeValue(){
    this.textManager.setValue({data: this.inpTxt.value});
    this.updateView();
  }

  updateView(){
    this.viewerEl.textContent = this.textManager.getValue();
  }
  
}