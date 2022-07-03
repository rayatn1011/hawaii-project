window.onload = () => {
  addNavTriggerEvent();

  function addNavTriggerEvent() {
    const navTriggerElement = document.querySelector(".nav-trigger");
    navTriggerElement.addEventListener("click", handleNavTriggerClick);
  }
  function handleNavTriggerClick() {
    const navTriggerElement = document.querySelector(".nav-trigger");
    toggleClass(navTriggerElement,'active')
    changBodyOverflow(navTriggerElement);

    function toggleClass(element,className){
      element.classList.toggle(className);
    }

    function changBodyOverflow(element){
      const isActive = element.classList.value.includes("active");
      document.querySelector("body").style.overflow = isActive ? "hidden" : "";
    }
  }
};
