"use strict";
var headerBtns = document.querySelector('.header_list');
var darkSection = document.querySelector('.dark');
var modalSection = document.querySelector('.modal');
var HomeButton = /** @class */ (function () {
    function HomeButton(attr) {
        this.attr = attr;
    }
    HomeButton.prototype.open = function (e) {
        var target = e.target;
        if (target.tagName === 'BUTTON') {
            darkSection === null || darkSection === void 0 ? void 0 : darkSection.classList.remove('hide');
            modalSection === null || modalSection === void 0 ? void 0 : modalSection.classList.remove('hide');
        }
    };
    HomeButton.prototype.close = function (e) {
        var target = e.target;
        if (target.className === 'close' || target.tagName === 'SVG') {
            darkSection === null || darkSection === void 0 ? void 0 : darkSection.classList.add('hide');
            modalSection === null || modalSection === void 0 ? void 0 : modalSection.classList.add('hide');
        }
    };
    HomeButton.prototype.getLabel = function () {
        var thisAttr = this.attr;
        switch (thisAttr) {
            case 'image':
            case 'video':
                return {
                    title: '제목',
                    link: '링크'
                };
            case 'note':
            case 'task':
                return {
                    title: '제목',
                    memo: '내용'
                };
        }
    };
    return HomeButton;
}());
// 모달에서 add함수를 만들면 되는건가?
// 추가되는 리스트(content)는 객체로 생성해야함
var imageBtn = new HomeButton('image');
var videoBtn = new HomeButton('video');
var noteBtn = new HomeButton('note');
var taskBtn = new HomeButton('task');
var openModal = function () {
    // switch(a) {
    //   case 'video':
    //     alert ('fsdf');
    // }
};
headerBtns === null || headerBtns === void 0 ? void 0 : headerBtns.addEventListener("click", openModal);
//# sourceMappingURL=main.js.map