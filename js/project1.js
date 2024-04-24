const imageContainers = document.querySelectorAll('.container');

const modalContainers = document.querySelectorAll('.modal');
imageContainers.forEach((container, index) => {
    container.addEventListener('click', () => {
        modalContainers[index].style.display = 'block';
    });
});

window.addEventListener('click', (event) => {
    modalContainers.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

const buttonSelector = document.querySelector("#theme_button");

buttonSelector.addEventListener('click', function() {
    document.querySelector("body").classList.toggle("dark");
})