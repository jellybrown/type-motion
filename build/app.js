import { ImageComponent } from './components/image/image.js';
import { PageComponent } from './components/page/page.js';
var App = /** @class */ (function () {
    function App(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        var image = new ImageComponent('Image test', 'https://picsum.photos/600/300');
        image.attachTo(appRoot, 'beforeend');
    }
    return App;
}());
new App(document.querySelector('.main'));
//# sourceMappingURL=app.js.map