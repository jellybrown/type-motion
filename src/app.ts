import { MediaSectionInput } from './components/page/dialog/input/media-input.js';
import { Dialog, MediaData, TextData } from './components/page/dialog/dialog.js';
import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { VideoComponent } from './components/page/item/video.js';
import { ImageComponent } from './components/page/item/image.js';
import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';
import { Component } from './components/component.js';
import { TextSectionInput } from './components/page/dialog/input/text-input.js';

type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
    new(): T;
}

class App {
    private readonly page: Component & Composable; // page: 뭔지 모르겟지만, 이런 인터페이스가 사용가능한 것
                            // 13번째줄의 attachTo, 그 외 addChild를 쓰기위해 & 로 page를 정의
     constructor(appRoot: HTMLElement, private dialogRoot:HTMLElement) {
        this.page = new PageComponent(PageItemComponent); // 너가 만들 수 있는 클래스는 PageItemComponent야.
        this.page.attachTo(appRoot);
        
        this.bindElementToDialog<MediaSectionInput>(
        '.image_btn', 
        MediaSectionInput, 
        (input: MediaSectionInput) => new ImageComponent(input.title, input.url));

        this.bindElementToDialog<MediaSectionInput>(
        '.video_btn', 
        MediaSectionInput, 
        (input: MediaSectionInput) => new VideoComponent(input.title, input.url));

        this.bindElementToDialog<TextSectionInput>(
        '.note_btn', 
        TextSectionInput, 
        (input: TextSectionInput) => new NoteComponent(input.title, input.body));

        this.bindElementToDialog<TextSectionInput>(
        '.task_btn', 
        TextSectionInput, 
        (input: TextSectionInput) => new TodoComponent(input.title, input.body));

            this.page.addChild(new ImageComponent('유진~~~', 'https://picsum.photos/800/400'))
            this.page.addChild(new ImageComponent('졸려...', 'https://picsum.photos/800/500'))
            this.page.addChild(new ImageComponent('헤헤헤', 'https://picsum.photos/600/500'))
            this.page.addChild(new NoteComponent('노트!!', '안녕?'))
            this.page.addChild(new NoteComponent('~~~~힘드러~~~', '안녕?'))
        }

    private bindElementToDialog<T extends (MediaData | TextData) & Component>(
        selector: string, 
        InputComponent: InputComponentConstructor<T>,
        makeSection: (input: T) => Component) {
        const element = document.querySelector(selector)! as HTMLButtonElement;
        element.addEventListener("click", () => {
            const dialog =  new Dialog(); 
            const input = new InputComponent();
            dialog.addChild(input);
            dialog.attachTo(this.dialogRoot);
            dialog.setOnCloseListener(() => { 
                dialog.removeFrom(this.dialogRoot)
            });
            dialog.setOnSubmitListener(() => {
                const note = makeSection(input);
                 this.page.addChild(note);
                dialog.removeFrom(this.dialogRoot)
            })
            dialog.attachTo(this.dialogRoot)
         })
    }
}

new App(document.querySelector('.main')! as HTMLElement, document.body);

