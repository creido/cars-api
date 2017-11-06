/**
 * Alternative transpiled down version
 */

'use strict';

var setSold = function setSold(event) {
    var btn = event.target;
    var id = btn.dataset.itemId;

    fetch('/cars/' + id, {
        method: 'PUT',
        mode: 'cors',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({ isSold: true })
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('something went wrong!');
        }
    }).then(function (data) {
        btn.disabled = true;
        btn.innerHTML = 'Sold';
    }).catch(function (error) {
        console.error('fetch error: ' + error.message);
    });
};

var initEvents = function initEvents() {
    var buttons = document.querySelectorAll('.btn-sold');

    buttons.forEach(function (btn) {
        btn.addEventListener('click', setSold.bind(undefined), false);
    });
};

var init = function init() {
    initEvents();
};

document.addEventListener('DOMContentLoaded', init, false);