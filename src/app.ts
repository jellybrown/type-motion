import { MediaSectionInput } from './components/page/dialog/input/media-input.js';
import { Dialog } from './components/page/dialog/dialog.js';

import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { VideoComponent } from './components/page/item/video.js';
import { ImageComponent } from './components/page/item/image.js';
import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';
import { Component } from './components/component.js';
import { TextSectionInput } from './components/page/dialog/input/text-input.js';
class App {
    private readonly page: Component & Composable; // page: 뭔지 모르겟지만, 이런 인터페이스가 사용가능한 것
                            // 13번째줄의 attachTo, 그 외 addChild를 쓰기위해 & 로 page를 정의
    constructor(appRoot: HTMLElement, dialogRoot:HTMLElement) {
        this.page = new PageComponent(PageItemComponent); // 너가 만들 수 있는 클래스는 PageItemComponent야.
        this.page.attachTo(appRoot);
        

    
  

  
    // const video = new VideoComponent('Video test', 'https://www.youtube.com/embed/0I647GU3Jsc');
    // this.page.addChild(video);
    
    const imageBtn = document.querySelector('.image_btn')! as HTMLButtonElement; // 1. 선택
    imageBtn.addEventListener("click", () => {
       const dialog =  new Dialog(); // 2. 다이어로그 생성후
       const inputSection = new MediaSectionInput();
       dialog.addChild(inputSection);
       dialog.attachTo(dialogRoot);

       dialog.setOnCloseListener(() => { // 3. closeListener에 할일을 등록한다.
           dialog.removeFrom(dialogRoot)
       });
       dialog.setOnSubmitListener(() => {
           const image = new ImageComponent(inputSection.title, inputSection.url);
            this.page.addChild(image);
           dialog.removeFrom(dialogRoot)
       })
       dialog.attachTo(dialogRoot) // 4. 이벤트들을 등록하고 body에 붙인다.
    })

    const videoBtn = document.querySelector('.video_btn')! as HTMLButtonElement;
    videoBtn.addEventListener("click", () => {
        const dialog =  new Dialog(); 
        const inputSection = new MediaSectionInput();
        dialog.addChild(inputSection);
        dialog.attachTo(dialogRoot);
        dialog.setOnCloseListener(() => { 
            dialog.removeFrom(dialogRoot)
        });
        dialog.setOnSubmitListener(() => {
            const video = new VideoComponent(inputSection.title, inputSection.url);
             this.page.addChild(video);
            dialog.removeFrom(dialogRoot)
        })
        dialog.attachTo(dialogRoot)
     })


    const noteBtn = document.querySelector('.note_btn')! as HTMLButtonElement;
    noteBtn.addEventListener("click", () => {
        const dialog =  new Dialog(); 
        const inputSection = new TextSectionInput();
        dialog.addChild(inputSection);
        dialog.attachTo(dialogRoot);
        dialog.setOnCloseListener(() => { 
            dialog.removeFrom(dialogRoot)
        });
        dialog.setOnSubmitListener(() => {
            const note = new NoteComponent(inputSection.title, inputSection.body);
             this.page.addChild(note);
            dialog.removeFrom(dialogRoot)
        })
        dialog.attachTo(dialogRoot)
     })

     const todoBtn = document.querySelector('.task_btn')! as HTMLButtonElement;
     todoBtn.addEventListener("click", () => {
        const dialog =  new Dialog(); 
        const inputSection = new TextSectionInput();
        dialog.addChild(inputSection);
        dialog.attachTo(dialogRoot);
        dialog.setOnCloseListener(() => { 
            dialog.removeFrom(dialogRoot)
        });
        dialog.setOnSubmitListener(() => {
            const todo = new TodoComponent(inputSection.title, inputSection.body);
             this.page.addChild(todo);
            dialog.removeFrom(dialogRoot)
        })
        dialog.attachTo(dialogRoot) // 4. 이벤트들을 등록하고 body에 붙인다.
     })


    }
}

new App(document.querySelector('.main')! as HTMLElement, document.body);

