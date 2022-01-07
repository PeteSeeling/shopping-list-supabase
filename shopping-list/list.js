import { checkAuth, createItem, deleteList, getItems, logout } from '../fetch-utils.js';
import { renderItem } from './render-utils.js';

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
    await displayShoppingList();

    itemForm.reset();
});

deleteListButton.addEventListener('click', async() => {
    await deleteList();
});

logoutButton.addEventListener('click', () => {
    logout();
});

async function displayShoppingList(){
    const items = await getItems();

    itemListEl.textContent = '';

    for (let item of items){
        const shoppingListEl = renderItem(item);

        itemListEl.append(shoppingListEl);



        displayShoppingList();






    }


}