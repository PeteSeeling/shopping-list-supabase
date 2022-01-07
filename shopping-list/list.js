import { buyItem, checkAuth, createItem, deleteList, getItems, logout } from '../fetch-utils.js';
import { renderItem } from './render-utils.js';

const itemForm = document.querySelector('#item-form');
const deleteListButton = document.querySelector('#delete-list');
const itemListEl = document.querySelector('.list-items');
const logoutButton = document.getElementById('logout');

checkAuth();


window.addEventListener('load', async() =>{
    displayShoppingList();
});

itemForm.addEventListener('submit', async(e) =>{
    e.preventDefault();
  
    const data = new FormData(itemForm);
    const amount = data.get('amount');
    const item = data.get('item');
    itemForm.reset();
    await createItem(amount, item);
    await displayShoppingList();

    
});

deleteListButton.addEventListener('click', async() => {
    await deleteList();
    await displayShoppingList();
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


        shoppingListEl.addEventListener('click', async() =>{
            await buyItem(item.id);
            await displayShoppingList();
        });

    }
}