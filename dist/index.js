"use strict";
function loadCode(url) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        const codeNode = document.querySelector('.code-block');
        if (codeNode) {
            codeNode.textContent = xhr.responseText;
        }
    };
    xhr.onerror = function () {
        console.error('Failed to load code file');
    };
    xhr.open('GET', url);
    xhr.send();
}
// window.addEventListener('load', () => {
document.querySelectorAll('.code-link').forEach(link => {
    link.addEventListener('click', ev => {
        const clickedNode = ev.target;
        const url = clickedNode.getAttribute('data-url') || '';
        loadCode(url);
    });
});
// })
