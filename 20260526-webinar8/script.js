// 1. найти элементы с которыми работаем
const accordionItem = document.getElementById('accordionItem');
const accordionContent = document.getElementById('accordionContent');


// 2. добавить lisntener
accordionItem.addEventListener('click', openAccordionContent);

// 3. добавить в обработчик listener нушу функцию
function openAccordionContent() {
    // появлкние контента = toggle class hidden
    accordionContent.classList.toggle('hidden');
}

// ------------------------------

// 1
const moveLeftButton = document.getElementById('moveLeft');
const moveRightButton = document.getElementById('moveRight');
const slide1 = document.getElementById('slide-1');

// 2 
moveLeftButton.addEventListener('click', moveLeft);
moveRightButton.addEventListener('click', moveRight);

// 3
function moveLeft() {
    const slide1 = document.getElementById('slide-1');
    slide1.style.marginLeft = `${parseInt(window.getComputedStyle(slide1).marginLeft) - 20}px`;

}

function moveRight() {
    const slide1 = document.getElementById('slide-1');
    slide1.style.marginLeft = `${parseInt(window.getComputedStyle(slide1).marginLeft) + 20}px`;
}