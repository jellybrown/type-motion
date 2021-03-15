import { BaseComponent } from '../../component.js';
// template을 이용한다.
export class ImageComponent extends BaseComponent<HTMLElement> {
    
    constructor(title: string, url: string) {
        super(`<section class="image">
                <div class="image_container"><img class="image_thumbnail" /></div>
                <h2 class="image_title"></h2>
                </section>`)

        const imageElement = this.element.querySelector('.image_thumbnail')! as HTMLImageElement;
        imageElement.src = url; // 윗줄에서 타입어설션을 해줬기때문에 가능
        imageElement.alt = title;

        const titleElement = this.element.querySelector('.image_title')! as HTMLHeadingElement;
        titleElement.textContent = title;
    }
    
}