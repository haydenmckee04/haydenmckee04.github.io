function toggleDescription(id) {
    const description = document.getElementById(`description${id}`);
    if (description.style.display === 'block') {
        description.style.display = 'none';
    } else {
        hideAllDescriptions();
        description.style.display = 'block';
    }
}

function hideAllDescriptions() {
    const descriptions = document.querySelectorAll('.description');
    descriptions.forEach(desc => {
        desc.style.display = 'none';
    });
}

document.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.matches('h3')) {
        hideAllDescriptions();
    }
});
