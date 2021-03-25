import { BaseComponent, Component } from './../component.js';

export interface Composable {
  addChild(child: Component): void;
}

type OnCloseListener = () => void; //아무것도 반환하지 않는 타입을 정의한다.
type DragState = 'start' | 'stop' | 'enter' | 'leave';
type OnDragStateListener<T extends Component> = (target: T, state: DragState) => void;

interface SectionContainer extends Component, Composable {
  setOnCloseListener(listener: OnCloseListener): void;
  setOnDragStateListener(listener: OnDragStateListener<SectionContainer>): void;
}

type SectionContainerConstructor = {
  new (): SectionContainer; // ⭐️ SectionContainer 형태라면 어떤 클래스라도 괜찮다.
};

export class PageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer {
  private closeListener?: OnCloseListener; // 그냥 콜백함수를 저장하는 아이를 만든다. 콜백함수를 밑에서 쓸 거기 떄문
  private dragStateListener?: OnDragStateListener<PageItemComponent>;
  constructor() {
    super(`<li class="page-item" draggable="true">
        <section class="page-item__body"></section>
        <div class="page-item__controls">
            <span class="close">&times;</span>
        </div>
        </li>`);
    const close = this.element.querySelector('.close')! as HTMLButtonElement;
    close.onclick = () => {
      this.closeListener && this.closeListener(); //3. 만약 closeListener가 등록 된다면(있다면), 호출한다.
    };
    // 생성되자마자 드래그이벤트를 걸어준다.
    // start, end: 본인이 드래그시작, 끝
    // enter, leave: 다른아이가 들어왔을때, 나갔을때
    this.element.addEventListener('dragstart', (event: DragEvent) => {
      this.onDragStart(event);
    });
    this.element.addEventListener('dragend', (event: DragEvent) => {
      this.onDragEnd(event);
    });
    this.element.addEventListener('dragenter', (event: DragEvent) => {
      this.onDragEnter(event);
    });
    this.element.addEventListener('dragleave', (event: DragEvent) => {
      this.onDragLeave(event);
    });
  }

  onDragStart(_: DragEvent) {
    this.notifyDragObservers('start');
  }
  onDragEnd(_: DragEvent) {
    this.notifyDragObservers('stop');
  }
  onDragEnter(_: DragEvent) {
    this.notifyDragObservers('enter');
  }
  onDragLeave(_: DragEvent) {
    this.notifyDragObservers('leave');
  }
  // 모든 drag이벤트들을 보고있다.
  notifyDragObservers(state: DragState) {
    this.dragStateListener && this.dragStateListener(this, state);
  }

  addChild(child: Component) {
    // 정의해둔 Component 인터페이스
    const container = this.element.querySelector('.page-item__body')! as HTMLElement;
    child.attachTo(container);
  }

  setOnCloseListener(listener: OnCloseListener) {
    // 2. PageItemComponent는 이러한 함수를 가지고 있다.
    this.closeListener = listener; // 받아온 인수를 등록한다.
  }
  setOnDragStateListener(listener: OnDragStateListener<PageItemComponent>) {
    this.dragStateListener = listener;
  }
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
  // PageComponent는 constructor에 ul태그가 만들어진다.
  private dragTarget?: SectionContainer;
  private dropTarget?: SectionContainer;
  constructor(private pageItemConstructor: SectionContainerConstructor) {
    super('<ul class="page"></ul>');
    this.element.addEventListener('dragover', (event: DragEvent) => {
      this.onDragOver(event);
    });

    this.element.addEventListener('drop', (event: DragEvent) => {
      this.onDragDrop(event);
    });
  }
  onDragOver(event: DragEvent) {
    event.preventDefault();
    console.log('onDragOver');
  }
  onDragDrop(event: DragEvent) {
    event.preventDefault();
    console.log('onDragDrop');
    if (!this.dropTarget) {
      // dropTarget 없으면 종료
      return;
    }
    if (this.dragTarget && this.dragTarget !== this.dropTarget) {
      this.dragTarget.removeFrom(this.element); // 나로부터 삭제
      this.dropTarget.attach(this.dragTarget, 'beforebegin');
    }
  }
  // 0. PageComponent의 addChild 메서드는 붙이는 기능과 없애는 기능이 있다.
  addChild(section: Component) {
    const item = new this.pageItemConstructor(); // ⭐️ 전달받은 인자로 새로운 객체를 생성
    item.addChild(section);
    item.attachTo(this.element, 'beforeend');
    item.setOnCloseListener(() => {
      // 1. 새로 생성되는 item의 setOnCloseListener를 호출한다.
      item.removeFrom(this.element); //  이러한 함수를 넘긴다. (removeFrom은 baseComponent에서 받음)
    });
    item.setOnDragStateListener((target: SectionContainer, state: DragState) => {
      // 새로생성되는 item의 dragListener를 호출한다.
      switch (state) {
        case 'start':
          this.dragTarget = target;
          break;
        case 'stop':
          this.dragTarget = undefined;
          break;
        case 'enter':
          this.dropTarget = target;
          break;
        case 'leave':
          this.dropTarget = undefined;
          break;
        default:
          throw new Error(`unsupported state:${state}`);
      }
    });
  }
}
// ⭐️ 1. new PageItemComponent -> 2. new this.pageItemCon~
// ⭐️ PageItemComponent 안에서 PageComponent를 부르는것은 좋지않다.
