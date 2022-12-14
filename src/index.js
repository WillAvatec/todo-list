import { formatDistance, subDays } from "date-fns";
import Project from '../src/modules/Classes/projects.js';
import { renderTodo } from "./modules/renderTodo.js";
import { form_handler } from "./modules/Classes/DOMDataHandle.js";
import Todo from "./modules/Classes/todo";

// When user clicks new project create current project

const defaultProject = new Project('default');

const one = new Todo('Love','low','2022','not yet')

const newProjectBtn = document.querySelector('.add-project-btn');

newProjectBtn.addEventListener('click',()=>{
    renderTodo(one)
})



// When the user clicks change DOM main into a form

/* const newTodoBtn = document.querySelector('todoBtn');

newTodoBtn.addEventListener('click',()=>{
    

    // Replace main content with a form for the 
    // with a button that returns an Todo object
}) */

// When the user clicks on the Create button, 