import { elementHelper } from "./Classes/elementCreator.js";

// Function that renders a card with the values from the todo 

const container = document.querySelector('.content');


// This function charge is to render a new card,
// whenever the  new todo button is clicked.

// THIS COULD HAVE MORE IMPLEMENTATION USING TODOS

export const renderTodo = (todo) => {

    const close = elementHelper('button',{id:'close'},['X'])
 
    const priority = elementHelper('p',{id:'priority'},[
        `Priority : ${todo.priority.toUpperCase()}`
    ])
    const title = elementHelper('h4',{class:'title'},[todo.todoTitle])
    const body = elementHelper('div',{class:'body'},[priority]);
    const head = elementHelper('div',{class:'head'},[title])
    const card_body = elementHelper('div',{class:'todo-body'},[close,head,body])
    const div = elementHelper('div',{class:'todo-card'},[card_body]);


    container.appendChild(div);
}




// This function renders a form

export const renderTodoForm = () => {

    // button to submit

    const Submit = elementHelper('button',{type:'submit'},['Create New Todo'])

    // Using radio btn to select value

    const PriorityInput2 = elementHelper('input',{type:'radio',id:'priority',name:'priority',value:'high'})
    const PriorityInput1 = elementHelper('input',{type:'radio',id:'priority',name:'priority',value:'low'})
    const PriorityLabel = elementHelper('label',{for:'priority'},['Prioridad :'])
    const PriorityDiv = elementHelper('div',{class:'priority-container'},[PriorityLabel,PriorityInput1,PriorityInput2])

    // Using text input to create a new name

    const TitleInput = elementHelper('input',{type:'text',id:'title',name:'title'})
    const TitleLabel = elementHelper('label',{for:'title'},['Tarea :'])
    const TitleDiv = elementHelper('div',{class:'title-container'},[TitleLabel,TitleInput])

    // Some text to make the form look less empty

    const TypePls = elementHelper('p',{},['Kindly fill the form'])


    const form = elementHelper('form',{class:'todo-form'},[TypePls,TitleDiv,PriorityDiv,Submit])

    container.appendChild(form);

    PriorityInput2.before('Alta');
    PriorityInput1.before('Baja');

}

// This renders all the todos in the current project

export const renderProject = (project) => {

    container.innerHTML = '';
    project.array.forEach(todo => {
        renderTodo(todo);
    });
}

// This renders an input for the creation of new  projects

export const renderInput = (btn)=> {

    const Close =       elementHelper('button',{class:'close'},['Cerrar'])
    const Accept =      elementHelper('button',{class:'accept'},['Aceptar'])
    const titleInput =  elementHelper('input',{class:'new-project'});
    const div =         elementHelper('div',{class:'project-input'},[titleInput,Accept,Close]);

    btn.before(div);
}