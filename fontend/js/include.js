function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    elements.forEach(el => { // use `el` consistently
        const file = el.getAttribute('data-include');
        fetch(file)
            .then(res => res.text())
            .then(data => {
                el.innerHTML = data;
            });
    });
}

window.addEventListener('DOMContentLoaded', includeHTML);
