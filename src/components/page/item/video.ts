import { BaseComponent } from '../../component.js';

//https://www.youtube.com/watch?v=0I647GU3Jsc&ab_channel=ImagineDragonsVEVO
//https://youtu.be/0I647GU3Jsc

//https://www.youtube.com/embed/0I647GU3Jsc

export class VideoComponent extends BaseComponent<HTMLElement> {
    constructor(title: string, url: string) {
        super(`<section class="video">
        <iframe width="800" height="400" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
        <h2 class="video_title"></h2>
        </section>`)

        const videoElement = this.element.querySelector('iframe')! as HTMLIFrameElement;
        videoElement.src = this.convertToEmbeddedURL(url);

        const videoTitle = this.element.querySelector('.video_title')! as HTMLHeadingElement;
        videoTitle.textContent = title;
              
    }

    private convertToEmbeddedURL(url: string): string {
        const regExp = /(?:https:\/\/)?(?:www\.)?(?:youtu)(?:be\.com\/)?(?:\.be\/)?(?:\watch\?v=)?(?:embed\/)?([a-zA-Z0-9-]+)/
        const result = url.match(regExp);
        const videoId = result ? result[1] : undefined;
        return `https://www.youtube.com/embed/${videoId}`
    }

}