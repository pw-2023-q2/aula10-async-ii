/**
 * Load code from a URL using XMLHttpRequest.
 * 
 * @param url the url
 */
function loadCode(url: string): void {
    const xhr = new XMLHttpRequest()

    xhr.onload = function () {
        const codeNode = document.querySelector('.code-block')

        if (codeNode) {
            codeNode.textContent = xhr.responseText
        }        
    }

    xhr.onerror = function () {
        console.error('Failed to load code file')
    }

    xhr.open('GET', url)
    xhr.send()
}

/**
 * Traverse all anchors in the document and assign 
 * a click event to each of them.
 * Each event handler load the url specificied in the 
 * given attribute
 */
// window.addEventListener('load', () => {
    document.querySelectorAll('.code-link').forEach(link => {
        link.addEventListener('click', ev => {
            const clickedNode = ev.target as HTMLAnchorElement
            const url = clickedNode.getAttribute('data-url') || ''

            loadCode(url)
        })
    })
// })