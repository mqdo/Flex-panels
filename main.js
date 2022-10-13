const allPanels = document.getElementsByClassName("panel");

console.log(allPanels);

for (let i = 0; i < allPanels.length; i++) {
  allPanels[i].addEventListener("mouseover", (e) => {
    // loop through all panels to see if they and their children have classes or not
    for (let i = 0; i < allPanels.length; i++) {
      allPanels[i].classList.remove("open");
      allPanels[i].children[0].classList.remove("open-panel");
      allPanels[i].children[2].classList.remove("open-panel");
    }
    // add classes for panel and their children
    allPanels[i].classList.add("open");
    allPanels[i].children[0].classList.add("open-panel");
    allPanels[i].children[2].classList.add("open-panel");
  });
}
