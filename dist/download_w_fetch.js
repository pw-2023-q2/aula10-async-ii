"use strict";
function loadCodeWithFetch(url) {
    fetch(url)
        .then(response => {
        if (response.ok) {
            return response.text();
        }
        throw new Error(response.status.toString());
    })
        .then(text => {
        const codeNode = document.querySelector('.code-block');
        if (codeNode) {
            codeNode.textContent = text;
        }
    })
        .catch(reason => {
        console.error('Failed to load code file. Reason: ' + reason);
    });
}
// window.addEventListener('load', () => {
document.querySelectorAll('.code-link').forEach(link => {
    link.addEventListener('click', ev => {
        const clickedNode = ev.target;
        const url = clickedNode.getAttribute('data-url') || '';
        loadCodeWithFetch(url);
    });
});
// })
