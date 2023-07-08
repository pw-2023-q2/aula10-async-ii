/**
 * Alternate version of the loadCode function, but this time
 * using fetch. 
 * 
 * @param url the url
 */
function loadCodeWithFetch(url: string) {
    /**
     * Fetch is a Promise-based API, here we use 
     * two chained then's to process a sequence
     * of two async operations (download and parsing)
     * and a catch to handle error conditions
     */
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.text()
            }
            throw new Error(response.status.toString())
        })
        .then(text => {
            const codeNode = document.querySelector('.code-block')

            if (codeNode) {
                codeNode.textContent = text
            }
        })
        .catch(reason => {
            console.error('Failed to load code file. Reason: ' + reason)
        })
}

// window.addEventListener('load', () => {
    document.querySelectorAll('.code-link').forEach(link => {
        link.addEventListener('click', ev => {
            const clickedNode = ev.target as HTMLAnchorElement
            const url = clickedNode.getAttribute('data-url') || ''

            loadCodeWithFetch(url)
        })
    })
// })