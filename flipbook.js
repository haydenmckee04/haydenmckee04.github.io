const flipbook = document.querySelector('.flipbook');
let currentPage = 0;

function flipNext() {
    if (currentPage < flipbook.children.length) {
        currentPage++;
        flipbook.style.transform = `translateX(-${currentPage * 12.5}%)`; // Adjust based on page width
    }
}

function flipPrevious() {
    if (currentPage > 0) {
        currentPage--;
        flipbook.style.transform = `translateX(-${currentPage * 12.5}%)`; // Adjust based on page width
    }
}

function goToStart() {
    currentPage = 0;
    flipbook.style.transform = `translateX(0)`;
}
