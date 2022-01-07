import { checkAuth, logout } from '../fetch-utils.js';

const itemForm = document.querySelector('item-form');
const addButton = document.querySelector('#add-button');
const deleteItemButton = document.querySelector('#delete-item');
const deleteListButton = document.querySelector('#delete-list');
const itemListEl = document.querySelector('.list-items');
const logoutButton = document.getElementById('logout');

checkAuth();





logoutButton.addEventListener('click', () => {
    logout();
});

