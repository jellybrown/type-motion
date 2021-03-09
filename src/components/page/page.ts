import { BaseComponent } from './../component.js';

export class PageComponent extends BaseComponent<HTMLUListElement> {
    
    // PageComponent는 constructor에 ul태그가 만들어진다.
    constructor() {
        super('<ul class="page">This is pageComponent</ul>')
        
    }

    // PageComponent에는 attachTo라는 메서드가 있다.
    // parent라는 요소를 전달해주면, 내부적으로 element를 parent에 넣어준다.
   
}