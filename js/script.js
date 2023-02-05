const accItem = document.querySelectorAll(".accordionItem"),
  accHD = document.querySelectorAll(".accordionItemHeading"),
  burger = document.querySelector(".sidebar__title_burger"),
  sidebar = document.querySelector(".sidebar__accordion"),
  toggler = () => {
    sidebar.classList.add("open");
    if (sidebar.classList.contains("close")) {
      sidebar.classList.remove("close");
      sidebar.classList.add("open");
    } else {
      sidebar.classList.remove("open");
      sidebar.classList.add("close");
    }
  };

accHD.forEach((i) => {
  i.addEventListener("click", toggleItem, false);
});

burger.addEventListener("click", toggler, false);

function toggleItem() {
  let itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].classList.add("close");
    document.body.style.marginRight = `0px`;
  }
  if (itemClass == "accordionItem close") {
    this.parentNode.classList.remove("close");
  }
}
