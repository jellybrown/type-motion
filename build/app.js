import { MediaSectionInput } from './components/page/dialog/input/media-input.js';
import { Dialog } from './components/page/dialog/dialog.js';
import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { VideoComponent } from './components/page/item/video.js';
import { ImageComponent } from './components/page/item/image.js';
import { PageComponent, PageItemComponent } from './components/page/page.js';
import { TextSectionInput } from './components/page/dialog/input/text-input.js';
class App {
    // 13번째줄의 attachTo, 그 외 addChild를 쓰기위해 & 로 page를 정의
    constructor(appRoot, dialogRoot) {
        this.dialogRoot = dialogRoot;
        this.page = new PageComponent(PageItemComponent); // 너가 만들 수 있는 클래스는 PageItemComponent야.
        this.page.attachTo(appRoot);
        this.bindElementToDialog('.image_btn', MediaSectionInput, (input) => new ImageComponent(input.title, input.url));
        this.bindElementToDialog('.video_btn', MediaSectionInput, (input) => new VideoComponent(input.title, input.url));
        this.bindElementToDialog('.note_btn', TextSectionInput, (input) => new NoteComponent(input.title, input.body));
        this.bindElementToDialog('.task_btn', TextSectionInput, (input) => new TodoComponent(input.title, input.body));
        this.page.addChild(new ImageComponent('유진~~~', 'https://picsum.photos/800/400'));
        this.page.addChild(new ImageComponent('졸려...', 'https://picsum.photos/800/500'));
        this.page.addChild(new ImageComponent('헤헤헤', 'https://picsum.photos/600/500'));
        this.page.addChild(new NoteComponent('노트!!', '안녕?'));
        this.page.addChild(new NoteComponent('~~~~힘드러~~~', '안녕?'));
    }
    bindElementToDialog(selector, InputComponent, makeSection) {
        const element = document.querySelector(selector);
        element.addEventListener("click", () => {
            const dialog = new Dialog();
            const input = new InputComponent();
            dialog.addChild(input);
            dialog.attachTo(this.dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(this.dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                const note = makeSection(input);
                this.page.addChild(note);
                dialog.removeFrom(this.dialogRoot);
            });
            dialog.attachTo(this.dialogRoot);
        });
    }
}
new App(document.querySelector('.main'), document.body);
//# sourceMappingURL=app.js.map