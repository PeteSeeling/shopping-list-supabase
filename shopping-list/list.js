import { checkAuth, createItem, logout } from '../fetch-utils.js';

const itemForm = document.querySelector('#item-form');
const addButton = document.querySelector('#add-button');
const deleteItemButton = document.querySelector('#delete-item');
const deleteListButton = document.querySelector('#delete-list');
const itemListEl = document.querySelector('.list-items');
const logoutButton = document.getElementById('logout');

// checkAuth();


itemForm.addEventListener('submit', async(e) =>{
    e.preventDefault();

    const data = new FormData(itemForm);
    const amount = data.get('amount');
    const item = data.get('item');
    console.log(item, amount);
    await createItem(amount, item);


});


logoutButton.addEventListener('click', () => {
    logout();
});

