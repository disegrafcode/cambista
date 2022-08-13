let arrayClassAnimations = ["fadeInLeft","fadeInRight","fadeInUp","fadeInDown"]
let elementsArray = document.querySelectorAll("body .c-section");
window.addEventListener("scroll", scrollAnimation);

function scrollAnimation() {
    for (let i = 0; i < elementsArray.length; i++) {
        let elem = elementsArray[i];
        let distInView = elem.getBoundingClientRect().top - window.innerHeight + 150;


        if (distInView < 0) {

            elem.classList.add("animate__fadeIn");
            elem.classList.add("animate__animated");

            for (let i = 0; i < arrayClassAnimations.length; i++)
            {
                let animateElements = elem.querySelectorAll(`.${arrayClassAnimations[i]}`);
                animationClassAdd(animateElements,arrayClassAnimations[i]);
            }

        } else {

            elem.classList.remove("animate__fadeIn");
            elem.classList.remove("animate__animated");

            for (let i = 0; i < arrayClassAnimations.length; i++)
            {
                let animateElements = elem.querySelectorAll(`.${arrayClassAnimations[i]}`);
                animationClassRemove(animateElements,arrayClassAnimations[i]);
            }
        }
    }
}

function initScrollAnimation() {
    for (let i = 0; i < elementsArray.length; i++) {
        elementsArray[i].style.opacity = 0;
    }
}

function animationClassAdd(elements,classAnimation) {
    elements.forEach((element) => {
      element.classList.add(`animate__${classAnimation}`);
      element.classList.add(`animate__animated`);
    });
}

function animationClassRemove(elements,classAnimation) {
    elements.forEach((element) => {
      element.classList.remove(`animate__${classAnimation}`);
      element.classList.remove(`animate__animated`);
    });
}

initScrollAnimation();
scrollAnimation();