import { BaseComponent, Component } from './../component.js';

export interface Composable {
    addChild(child: Component): void;
}

class PageItemComponent extends BaseComponent<HTMLElement> implements Composable{
    constructor() {
        super(`<li class="page-item">
        <section class="page-item__body"></section>
        <div class="page-item__controls">
            <span class="close">&times;</span>
        </div>
        </li>`); 
    }

    addChild(child: Component) { // 정의해둔 Component 인터페이스
        const container = this.element.querySelector('.page-item__body')! as HTMLElement;
        child.attachTo(container);
    }

}


export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
    
    // PageComponent는 constructor에 ul태그가 만들어진다.
    constructor() {
        super('<ul class="page"></ul>');
    }

    // PageComponent에는 attachTo라는 메서드가 있다.
    // parent라는 요소를 전달해주면, 내부적으로 element를 parent에 넣어준다.
   addChild(section: Component) {
       const item = new PageItemComponent();
       item.addChild(section);
       item.attachTo(this.element, 'beforeend');
   }
}
