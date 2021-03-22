import { ImageComponent } from './../item/image.js';
import { BaseComponent, Component } from '../../component.js';
import { Composable, SectionContainer } from '../page.js';

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

//type ContentType = 'image'| 'video' | 'todo' | 'note';


export class Dialog extends BaseComponent<HTMLElement> implements Composable{
        private closeListener?: OnCloseListener;
        private submitListener?: OnSubmitListener;

    constructor() {
        super(`<section class="dialog">
            <div class="dialog__container">
                <button class="close">X</button>
                <div id="dialog__body"></div>
                <button class="dialog__submit">ADD</button>
            </div>
    </section>`);

        // const inputContent = this.element.querySelector('.second')! as HTMLLabelElement;
        // if(type === 'image' || type === 'video') inputContent.textContent = 'URL';

    const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
    const submitBtn = this.element.querySelector('.dialog__submit')! as HTMLButtonElement;
        closeBtn.onclick = () => {
            this.closeListener&& this.closeListener();
        }
        submitBtn.onclick = () => {
            // const userTitle = this.element.querySelector('#input__title')! as HTMLInputElement;
            // const userContent = this.element.querySelector("#input__content")! as HTMLInputElement;
            // new ImageComponent(userTitle.value ,userContent.value );
            this.submitListener&& this.submitListener();
        }

    }

    setOnCloseListener(listener: OnCloseListener) {
       this.closeListener = listener;
    }
    setOnSubmitListener(listener: OnSubmitListener) {
        this.submitListener = listener;
    }

    addChild(child: Component) {
        const body = this.element.querySelector("#dialog__body")! as HTMLElement;
        child.attachTo(body)
    }
}
