'use strict';

const setSold = (event) => {
    const btn = event.target;
    const id = btn.dataset.itemId;

    fetch('/cars/' + id, {

        method: 'PUT', 
        mode: 'cors', 
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({isSold: true})

    }).then(response => {

        if (response.ok) {
            return response.json();
        } else {
            throw new Error('something went wrong!');
        }

    }).then(data => {

        btn.disabled = true;
        btn.innerHTML = 'Sold';

    }).catch(error => {
        console.error(`fetch error: ${error.message}`);
    });
};

const initEvents = () => {
    const buttons = document.querySelectorAll('.btn-sold');

    buttons.forEach(btn => {
        btn.addEventListener('click', setSold.bind(this), false);
    });
};

const init = () => {
    initEvents();
};

document.addEventListener('DOMContentLoaded', init, false);
