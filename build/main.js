"use strict";
var headerBtns = document.querySelector('.header_list');
var darkSection = document.querySelector('.dark');
var modalSection = document.querySelector('.modal');
var openModal = function (e) {
    var target = e.target;
    if (target.tagName === 'BUTTON') {
        darkSection === null || darkSection === void 0 ? void 0 : darkSection.classList.remove('hide');
        modalSection === null || modalSection === void 0 ? void 0 : modalSection.classList.remove('hide');
    }
};
headerBtns === null || headerBtns === void 0 ? void 0 : headerBtns.addEventListener("click", openModal);
//# sourceMappingURL=main.js.map