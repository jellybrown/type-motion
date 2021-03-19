import { Dialog } from './components/page/dialog/dialog.js';
import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { VideoComponent } from './components/page/item/video.js';
import { ImageComponent } from './components/page/item/image.js';
import { PageComponent, PageItemComponent } from './components/page/page.js';
var App = /** @class */ (function () {
    // 13번째줄의 attachTo, 그 외 addChild를 쓰기위해 & 로 page를 정의
    function App(appRoot) {
        this.page = new PageComponent(PageItemComponent); // 너가 만들 수 있는 클래스는 PageItemComponent야.
        this.page.attachTo(appRoot);
        var image = new ImageComponent('Image test', 'https://picsum.photos/600/300');
        this.page.addChild(image);
        var note = new NoteComponent('Note test', '헤헤헤헤헤헤');
        this.page.addChild(note);
        var todo = new TodoComponent('Todo test', '책읽기');
        this.page.addChild(todo);
        var video = new VideoComponent('Video test', 'https://www.youtube.com/embed/0I647GU3Jsc');
        this.page.addChild(video);
        var imageBtn = document.querySelector('.image_btn'); // 1. 선택
        imageBtn.addEventListener("click", function () {
            var dialog = new Dialog(); // 2. 다이어로그 생성후
            dialog.setOnCloseListener(function () {
                dialog.removeFrom(document.body);
            });
            dialog.setOnSubmitListener(function () {
                //섹션을 만들어서 페이지에 추가
                dialog.removeFrom(document.body);
            });
            dialog.attachTo(document.body); // 4. 이벤트들을 등록하고 body에 붙인다.
        });
    }
    return App;
}());
new App(document.querySelector('.main'));
//# sourceMappingURL=app.js.map