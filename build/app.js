import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { VideoComponent } from './components/page/item/video.js';
import { ImageComponent } from './components/page/item/image.js';
import { PageComponent } from './components/page/page.js';
var App = /** @class */ (function () {
    function App(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        var image = new ImageComponent('Image test', 'https://picsum.photos/600/300');
        image.attachTo(appRoot, 'beforeend');
        var note = new NoteComponent('Note test', '헤헤헤헤헤헤');
        note.attachTo(appRoot, 'beforeend');
        var todo = new TodoComponent('Todo test', '책읽기');
        todo.attachTo(appRoot, 'beforeend');
        var video = new VideoComponent('Video test', 'https://www.youtube.com/embed/0I647GU3Jsc');
        video.attachTo(appRoot, 'beforeend');
    }
    return App;
}());
new App(document.querySelector('.main'));
//# sourceMappingURL=app.js.map