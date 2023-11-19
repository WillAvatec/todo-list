import Project from '../src/modules/Classes/projects.js';
import Todo from "./modules/Classes/todo";
import { renderInput, renderProject, renderTodoForm } from "./modules/renderFuncs.js";
import { folder_handler, form_handler } from "./modules/Classes/DOMDataHandle.js";

const container = document.querySelector('.content');

// When the user clicks on the todoBtn clicks change DOM main into a form

const todoBtn = document.querySelector('.todo-btn');

todoBtn.addEventListener('click',()=>{
    container.innerHTML = '';       //Prevent multiple forms rendered
    renderTodoForm()
})


// When the user clicks on the submit button, create a new Todo object,
// and render the Project todos

const home = new Project('default')

let defaultProject = home;
// export const getFoo = () => defaultProject;
export const setFoo = (val) => (defaultProject = val);

document.addEventListener('click',(ev)=>{
    const target = ev.target.closest('form > button');
        if(target){

            ev.preventDefault();                    // Prevent the page from recharge

            const element = form_handler()          // Return new Todo Object

            defaultProject.pushTodo(element)        // Push to the current Project

            container.innerHTML= '';                // Clean Screen

            renderProject(defaultProject);         // Render all projects
            console.log(defaultProject);
        }
})


// When clicking on the new project button, create a new project and save it on the localStorage

const newProjectButton = document.querySelector('#project');
const input = document.querySelector('.project-input')

newProjectButton.addEventListener('click',()=>{

    newProjectButton.classList.toggle('disable');
    input.classList.remove('disable');

})

// When clicking on close button close, hide the input

const disable = document.querySelector('.close');

disable.addEventListener('click',()=>{
        input.classList.toggle('disable');
        newProjectButton.classList.toggle('disable');
})



// When clicking on accept create a new project and render it

const acceptBtn = document.querySelector('.accept');
const inputTitle = document.querySelector('.title');

let counter = 0

acceptBtn.addEventListener('click',()=>{
    if( inputTitle.value !== null && inputTitle.value !== '') {

        newProjectButton.classList.toggle('disable');       // Hide button
        input.classList.toggle('disable');                  // Show input
        let temp = new Project(inputTitle.value);
        defaultProject = temp;            // Create new project
        folder_handler(temp,temp);                          // Create a button
        localStorage.setItem(`project ${counter}`,JSON.stringify(defaultProject))  // Save Default in localStorage

        counter++

        inputTitle.value = '';                              // Clean input text
        console.log(temp)
        return                                              // :q
    }
    alert('Debes escribir el nombre primero.')   
})
