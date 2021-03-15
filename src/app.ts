
import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { VideoComponent } from './components/page/item/video.js';
import { ImageComponent } from './components/page/item/image.js';
import { Composable, PageComponent } from './components/page/page.js';
import { Component } from './components/component.js';
class App {
    private readonly page: Component & Composable; // page: 뭔지 모르겟지만, 이런 인터페이스가 사용가능한 것
    
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        

    const image = new ImageComponent('Image test','https://picsum.photos/600/300');
    this.page.addChild(image);

    const note = new NoteComponent('Note test', '헤헤헤헤헤헤');
    this.page.addChild(note);

    const todo = new TodoComponent('Todo test', '책읽기');
    this.page.addChild(todo);

    const video = new VideoComponent('Video test', 'https://www.youtube.com/embed/0I647GU3Jsc');
    this.page.addChild(video);
    
    }
}

new App(document.querySelector('.main')! as HTMLElement);

