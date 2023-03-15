(() => {
  new Accordion(".js-accordion-container", {
    openOnInit: [0]
  });
})();


// Табы
const param = {
  tabsClass: "js-tab-btn",
  wrap: "js-tabs-wrap",
  content: "js-tab-content",
  active: "active"
};

function setTabs(params) {
  const tabBtns = document.querySelectorAll(`.${param.tabsClass}`);

  function onTabClick(e) {
    e.preventDefault();
    const path = this.dataset.path;
    const wrap = this.closest(`.${param.wrap}`);
    const currentContent = wrap.querySelector(`.${param.content}[data-target="${path}"]`);
    const contents = wrap.querySelectorAll(`.${param.content}`);

    contents.forEach((el) => {
      el.classList.remove(param.active);
    });

    currentContent.classList.add(param.active);

    tabBtns.forEach((el) => {
      el.classList.remove(param.active);
    });

    this.classList.add(param.active);
  }

  tabBtns.forEach(function (el) {
    el.addEventListener("click", onTabClick);
  });
}

setTabs(params);
