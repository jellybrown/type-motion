const headerBtns = document.querySelector<HTMLElement>('.header_list');
const darkSection = document.querySelector<HTMLElement>('.dark');
const modalSection = document.querySelector<HTMLElement>('.modal');

const openModal = (e:Event) => {
    const target: HTMLElement = <HTMLElement>e.target;
   if(target.tagName === 'BUTTON') {
    darkSection?.classList.remove('hide');
    modalSection?.classList.remove('hide');
   }
}

headerBtns?.addEventListener("click", openModal);