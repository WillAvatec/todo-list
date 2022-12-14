import Project from '../src/modules/Classes/projects.js';
import Todo from "./modules/Classes/todo";
import { renderTodo, renderTodoForm } from "./modules/renderTodo.js";
import { form_handler } from "./modules/Classes/DOMDataHandle.js";

const defaultProject = new Project('default');
const one = new Todo('Love','low','2022','not yet');
defaultProject.pushTodo(one);

const container = document.querySelector('.content');


// When the user clicks on the todoBtn clicks change DOM main into a form

const todoBtn = document.querySelector('.todo-btn');

todoBtn.addEventListener('click',()=>{
    container.innerHTML = '';       //Prevent multiple forms rendered
    renderTodoForm()
})

// When the user clicks on the submit button, create a new Todo object,
// and render the Project todos

document.addEventListener('click',(ev)=>{
    const target = ev.target.closest('form > button');
        if(target){
            ev.preventDefault();                 // Prevent the page from recharge

            const element = form_handler()       // Return new Todo Object

            defaultProject.pushTodo(element);    // Push to the current Project

            container.innerHTML = '';
            renderTodo(element)                  // Show selected project todos  

            console.log('Event listener now works')            
        }
})
