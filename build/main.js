"use strict";
var headerBtns = document.querySelector('.header_list');
var darkSection = document.querySelector('.dark');
var modalSection = document.querySelector('.modal');
// 각각 버튼에게 부여해보자.
var HomeButton = /** @class */ (function () {
    function HomeButton() {
        this.open = function (e) {
            var target = e.target;
            if (target.tagName === 'BUTTON') {
                darkSection === null || darkSection === void 0 ? void 0 : darkSection.classList.remove('hide');
                modalSection === null || modalSection === void 0 ? void 0 : modalSection.classList.remove('hide');
            }
        };
        this.close = function (e) {
            var target = e.target;
            if (target.className === 'close' || target.tagName === 'SVG') {
                darkSection === null || darkSection === void 0 ? void 0 : darkSection.classList.add('hide');
                modalSection === null || modalSection === void 0 ? void 0 : modalSection.classList.add('hide');
            }
        };
    }
    return HomeButton;
}());
// 모달에서 add함수를 만들면 되는건가?
// 추가되는 리스트(content)는 객체로 생성해야함
var openModal = function () {
    //변경중
};
headerBtns === null || headerBtns === void 0 ? void 0 : headerBtns.addEventListener("click", openModal);
//# sourceMappingURL=main.js.map