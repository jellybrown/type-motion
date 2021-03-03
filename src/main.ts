const headerBtns = document.querySelector<HTMLElement>('.header_list');
const darkSection = document.querySelector<HTMLElement>('.dark');
const modalSection = document.querySelector<HTMLElement>('.modal');

// 컨텐츠 구분
type Content = 'image' | 'video' | 'note' | 'task' ;

// 모달창의 컨텐츠별 label 구분
// image, video: title, link
// note, task: title, memo
type Label = {
  title: string;
  link?: string;
  memo?: string;
}

class HomeButton {
  constructor(public attr: Content) {
  }
    open(e:Event)  {
    const target: HTMLElement = <HTMLElement>e.target;
   if(target.tagName === 'BUTTON') {
    darkSection?.classList.remove('hide');
    modalSection?.classList.remove('hide');
      }
    }
    close(e:Event) {
    const target: HTMLElement = <HTMLElement>e.target;
   if(target.className === 'close' || target.tagName === 'SVG') {
    darkSection?.classList.add('hide');
    modalSection?.classList.add('hide');
      }
    }
    getLabel(): Label {
      let thisAttr = this.attr;
      switch(thisAttr) {
        case 'image':
        case 'video':
          return {
            title: '제목',
            link: '링크'
          };
        case 'note':
        case 'task':
          return {
            title: '제목',
            memo: '내용'
          };
      }
    }
}



// 모달에서 add함수를 만들면 되는건가?
// 추가되는 리스트(content)는 객체로 생성해야함
const imageBtn = new HomeButton('image');
const videoBtn = new HomeButton('video');
const noteBtn = new HomeButton('note');
const taskBtn = new HomeButton('task');

const openModal = () => {
    // switch(a) {
    //   case 'video':
    //     alert ('fsdf');

    // }
}



headerBtns?.addEventListener("click", openModal);
