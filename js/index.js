'use strict';

// MODAL VARIABLES
const modal = document.querySelector('[data-modal');
const modalCloseBtn = document.querySelector('[data-modal-close');
const modalCloseOverlay = document.querySelector('[data-modal-overlay');

// MODAL FUNCTION
const modalCloseFunc = () => modal.classList.add('closed');

// MODAL EVENTLISTENER
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);