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
        this.page.addChild(image);
        var note = new NoteComponent('Note test', '헤헤헤헤헤헤');
        this.page.addChild(note);
        var todo = new TodoComponent('Todo test', '책읽기');
        this.page.addChild(todo);
        var video = new VideoComponent('Video test', 'https://www.youtube.com/embed/0I647GU3Jsc');
        this.page.addChild(video);
    }
    return App;
}());
new App(document.querySelector('.main'));
//# sourceMappingURL=app.js.map