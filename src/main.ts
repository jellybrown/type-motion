const headerBtns = document.querySelector<HTMLElement>('.header_list');
const darkSection = document.querySelector<HTMLElement>('.dark');
const modalSection = document.querySelector<HTMLElement>('.modal');

// 각각 버튼에게 부여해보자.

class HomeButton {
    open = (e:Event) => {
    const target: HTMLElement = <HTMLElement>e.target;
   if(target.tagName === 'BUTTON') {
    darkSection?.classList.remove('hide');
    modalSection?.classList.remove('hide');
      }
    }
    close = (e:Event) => {
    const target: HTMLElement = <HTMLElement>e.target;
   if(target.className === 'close' || target.tagName === 'SVG') {
    darkSection?.classList.add('hide');
    modalSection?.classList.add('hide');
      }
    }
}
// 모달에서 add함수를 만들면 되는건가?
// 추가되는 리스트(content)는 객체로 생성해야함


const openModal = () => {
    //변경중
}

headerBtns?.addEventListener("click", openModal);