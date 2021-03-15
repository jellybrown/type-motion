import { BaseComponent } from '../../component.js';

export class NoteComponent extends BaseComponent<HTMLElement> {
    constructor(title:string, note:string) {
        super(`<section class="note">
            <h2 class="note_title"></h2>
            <p class="note_text"></p>
            </section>`)
            
        // HTMLHeadingElement: h1과 같은 heading태그를 대표하는 요소
        const titleElement = this.element.querySelector('.note_title')! as HTMLHeadingElement;
        titleElement.textContent = title;

        const noteElement = this.element.querySelector('.note_text')! as HTMLDivElement;
        noteElement.textContent = note;

    };

   

}