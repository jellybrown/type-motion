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
        this.dialogRoot = dialogRoot;
        this.page = new PageComponent(PageItemComponent); // 너가 만들 수 있는 클래스는 PageItemComponent야.
        this.page.attachTo(appRoot);
        this.bindElementToDialog('.image_btn', MediaSectionInput, function (input) { return new ImageComponent(input.title, input.url); });
        this.bindElementToDialog('.video_btn', MediaSectionInput, function (input) { return new VideoComponent(input.title, input.url); });
        this.bindElementToDialog('.note_btn', TextSectionInput, function (input) { return new NoteComponent(input.title, input.body); });
        this.bindElementToDialog('.task_btn', TextSectionInput, function (input) { return new TodoComponent(input.title, input.body); });
        this.page.addChild(new ImageComponent('유진~~~', 'https://picsum.photos/800/400'));
        this.page.addChild(new ImageComponent('졸려...', 'https://picsum.photos/800/500'));
        this.page.addChild(new ImageComponent('헤헤헤', 'https://picsum.photos/600/500'));
        this.page.addChild(new NoteComponent('노트!!', '안녕?'));
        this.page.addChild(new NoteComponent('~~~~힘드러~~~', '안녕?'));
    }
    App.prototype.bindElementToDialog = function (selector, InputComponent, makeSection) {
        var _this = this;
        var element = document.querySelector(selector);
        element.addEventListener("click", function () {
            var dialog = new Dialog();
            var input = new InputComponent();
            dialog.addChild(input);
            dialog.attachTo(_this.dialogRoot);
            dialog.setOnCloseListener(function () {
                dialog.removeFrom(_this.dialogRoot);
            });
            dialog.setOnSubmitListener(function () {
                var note = makeSection(input);
                _this.page.addChild(note);
                dialog.removeFrom(_this.dialogRoot);
            });
            dialog.attachTo(_this.dialogRoot);
        });
    };
    return App;
}());
new App(document.querySelector('.main'), document.body);
//# sourceMappingURL=app.js.map