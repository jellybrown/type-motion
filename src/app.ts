import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { VideoComponent } from './components/page/item/video.js';
import { ImageComponent } from './components/page/item/image.js';
import { PageComponent } from './components/page/page.js';
class App {
    private readonly page: PageComponent;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const image = new ImageComponent('Image test','https://picsum.photos/600/300');
        image.attachTo(appRoot, 'beforeend');

        const note = new NoteComponent('Note test', '헤헤헤헤헤헤');
        note.attachTo(appRoot,'beforeend');

        const todo = new TodoComponent('Todo test', '책읽기');
        todo.attachTo(appRoot, 'beforeend');

        const video = new VideoComponent('Video test', 'https://www.youtube.com/embed/0I647GU3Jsc');
        video.attachTo(appRoot, 'beforeend');
    }
}

new App(document.querySelector('.main')! as HTMLElement);

