import { BaseComponent } from './../../../component.js';

export class TextSectionInput extends BaseComponent<HTMLElement> {
    constructor() {
        super(`<div>
        <div class="form__container">
            <label for="title">제목</label>
            <input type="text" id="title">
        </div>
        <div class="form__container">
            <label for="body">내용</label>
            <input type="text" id="body">
        </div>
    </div>`)
    }

    get title(): string {
        const element = this.element.querySelector('#title')! as HTMLInputElement;
        return element.value;
    }
    get body(): string {
        const element = this.element.querySelector('#body')! as HTMLInputElement;
        return element.value;
    }
}


