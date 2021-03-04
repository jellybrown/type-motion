

export class PageComponent {
    private element: HTMLUListElement;

    // PageComponent는 constructor에 ul태그가 만들어진다.
    constructor() {
        this.element = document.createElement('ul');
        this.element.setAttribute('class', 'page');
        this.element.textContent = 'This is PageComponent';
    }

    // PageComponent에는 attachTo라는 메서드가 있다.
    // parent라는 요소를 전달해주면, 내부적으로 element를 parent에 넣어준다.
    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
        //insertAdjacentElement: innerHTML과 비슷하지않을까?
    }
}