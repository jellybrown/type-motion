import { MediaSectionInput } from './components/page/dialog/input/media-input.js';
import { Dialog } from './components/page/dialog/dialog.js';
import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { VideoComponent } from './components/page/item/video.js';
import { ImageComponent } from './components/page/item/image.js';
import { PageComponent, PageItemComponent } from './components/page/page.js';
import { TextSectionInput } from './components/page/dialog/input/text-input.js';
var App = /** @class */ (function () {
    // 13번째줄의 attachTo, 그 외 addChild를 쓰기위해 & 로 page를 정의
    function App(appRoot, dialogRoot) {
        var _this = this;
        this.page = new PageComponent(PageItemComponent); // 너가 만들 수 있는 클래스는 PageItemComponent야.
        this.page.attachTo(appRoot);
        // const video = new VideoComponent('Video test', 'https://www.youtube.com/embed/0I647GU3Jsc');
        // this.page.addChild(video);
        var imageBtn = document.querySelector('.image_btn'); // 1. 선택
        imageBtn.addEventListener("click", function () {
            var dialog = new Dialog(); // 2. 다이어로그 생성후
            var inputSection = new MediaSectionInput();
            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);
            dialog.setOnCloseListener(function () {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(function () {
                var image = new ImageComponent(inputSection.title, inputSection.url);
                _this.page.addChild(image);
                dialog.removeFrom(dialogRoot);
            });
            dialog.attachTo(dialogRoot); // 4. 이벤트들을 등록하고 body에 붙인다.
        });
        var videoBtn = document.querySelector('.video_btn');
        videoBtn.addEventListener("click", function () {
            var dialog = new Dialog();
            var inputSection = new MediaSectionInput();
            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);
            dialog.setOnCloseListener(function () {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(function () {
                var video = new VideoComponent(inputSection.title, inputSection.url);
                _this.page.addChild(video);
                dialog.removeFrom(dialogRoot);
            });
            dialog.attachTo(dialogRoot);
        });
        var noteBtn = document.querySelector('.note_btn');
        noteBtn.addEventListener("click", function () {
            var dialog = new Dialog();
            var inputSection = new TextSectionInput();
            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);
            dialog.setOnCloseListener(function () {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(function () {
                var note = new NoteComponent(inputSection.title, inputSection.body);
                _this.page.addChild(note);
                dialog.removeFrom(dialogRoot);
            });
            dialog.attachTo(dialogRoot);
        });
        var todoBtn = document.querySelector('.task_btn');
        todoBtn.addEventListener("click", function () {
            var dialog = new Dialog();
            var inputSection = new TextSectionInput();
            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);
            dialog.setOnCloseListener(function () {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(function () {
                var todo = new TodoComponent(inputSection.title, inputSection.body);
                _this.page.addChild(todo);
                dialog.removeFrom(dialogRoot);
            });
            dialog.attachTo(dialogRoot); // 4. 이벤트들을 등록하고 body에 붙인다.
        });
    }
    return App;
}());
new App(document.querySelector('.main'), document.body);
//# sourceMappingURL=app.js.map