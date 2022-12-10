const createCard = (form) =>{

    const list = document.querySelector('.todo-container');

    const div = document.createElement('div');
    const title = document.createElement('p');
    title.textContent = form.dataTitle;
    div.className = 'todo-card';
    div.appendChild(title);
    list.appendChild(div);
}

export {createCard};