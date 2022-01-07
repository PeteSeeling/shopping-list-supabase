

export function renderItem(item){
    const div = document.createElement('div');
    const p = document.createElement('p');

    if (item.bought === true) {
        div.classList.add('bought');
    }
    else {
        div.classList.add('unbought');
    }

    p.textContent = ` ${item.amount} ${item.item}`;

    div.append(p);

    return div;

}
