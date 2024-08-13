const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');

yesButton.addEventListener('click', () => {
    const date = prompt('Tell me the date:');
    if (date) {
        alert(`Great! See you on ${date}.`);
    }
});

noButton.addEventListener('mousedown', (e) => {
    const button = e.target;
    let offsetX, offsetY, isDragging = false;

    isDragging = true;
    offsetX = e.clientX - button.getBoundingClientRect().left;
    offsetY = e.clientY - button.getBoundingClientRect().top;

    const onMouseMove = (e) => {
        if (isDragging) {
            button.style.position = 'absolute';
            button.style.left = `${e.clientX - offsetX}px`;
            button.style.top = `${e.clientY - offsetY}px`;
        }
    };

    const onMouseUp = () => {
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});
