let replaceSettings = {
  beforebegin: 'beforebegin', // перед самим элементом targetElement
  afterbegin: 'afterbegin', // внутри элемента targetElement, перед его первым потомком
  beforeend: 'beforeend', //  внутри элемента targetElement, после его последнего потомка
  afterend: 'afterend', // после самого элемента targetElement
  mobile: 576,
  smallTablet: 769,
  tablet: 975
}

let elementName = {
  headerNav: '.header__nav',
  headerNavParent: '.header__logo',
  headerNavMobile: '.mobile__menu',

  headerBtn: '.header__btn',
  headerBtnParent: '.header__wrapp',
  headerBtnMobile: '.mobile__menu',
}

let items = [...document.querySelectorAll('.wrapper')];

const replaceElements = (elements, elementClass, desktopClass, mobileClass, mobileSetting, desktopSetting, breakpointSetting) => {
  let containerWidth = document.documentElement.clientWidth;

  elements.map(function (item) {
    const myElement = item.querySelector(elementClass);
    const myDesktop = item.querySelector(desktopClass);
    const myMobile = item.querySelector(mobileClass);

    (function() {
      if (myDesktop && myElement && myMobile) {
        containerWidth <= breakpointSetting ?
        myMobile.insertAdjacentElement(mobileSetting, myElement) :
        myDesktop.insertAdjacentElement(desktopSetting, myElement);
      }
    }());
  });
}

window.addEventListener('resize', () => {
  replaceElements(items, elementName.headerNav, elementName.headerNavParent, elementName.headerNavMobile, replaceSettings.afterbegin, replaceSettings.afterend,  replaceSettings.tablet);

  replaceElements(items, elementName.headerBtn, elementName.headerBtnParent, elementName.headerBtnMobile, replaceSettings.beforeend, replaceSettings.beforeend,  replaceSettings.tablet);
});

window.addEventListener('DOMContentLoaded', () => {
  replaceElements(items, elementName.headerNav, elementName.headerNavParent, elementName.headerNavMobile, replaceSettings.afterbegin, replaceSettings.afterend,  replaceSettings.tablet);

  replaceElements(items, elementName.headerBtn, elementName.headerBtnParent, elementName.headerBtnMobile, replaceSettings.beforeend, replaceSettings.beforeend,  replaceSettings.tablet);
});
