const list = document.querySelector('.todo-container');

const submit = document.querySelector('form button');

let form;

// Cuando se presione el boton submit, crear new div con los datos de tal.

submit.addEventListener('click',(ev)=>{
    ev.preventDefault();
    let dataTitle = document.querySelector('#title').value;
    let dataDescript = document.querySelector('#descript').value;
    let dueTime = document.querySelector('#due').value;

    form = {dataTitle,dataDescript,dueTime}
})

export {form}