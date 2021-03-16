export interface Component {
    attachTo(parent: HTMLElement, position?: InsertPosition): void;
    removeFrom(parent:HTMLElement): void;
}

// T타입(현재는 알 수 없는)인데 html element이다.
export class BaseComponent<T extends HTMLElement> implements Component {

    protected readonly element: T;

    constructor(htmlString: string) {
        const template = document.createElement('template');
        template.innerHTML = htmlString;
        this.element = template.content.firstElementChild! as T;
    }

    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }

    removeFrom(parent: HTMLElement) { // 자신을 제거하는 removeFrom
        if(parent !== this.element.parentElement) {
            throw new Error('Parent mismatch!')
        }
        parent.removeChild(this.element);
    }
}