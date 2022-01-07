import { checkAuth, createItem, deleteList, logout } from '../fetch-utils.js';

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
  
    await createItem(amount, item);

    itemForm.reset();
});

deleteListButton.addEventListener('click', async() => {
    await deleteList();
});

logoutButton.addEventListener('click', () => {
    logout();
});

