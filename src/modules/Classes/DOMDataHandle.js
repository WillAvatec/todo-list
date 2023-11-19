import { setFoo } from '../../index.js';
import { renderProject } from '../renderFuncs.js';
import { elementHelper } from './elementCreator.js'
import Todo from './todo.js';

// This function will transform form data into a todo 

export const form_handler = () => {

    const dataTitle = document.querySelector('#title').value;
    const dataPrior = document.querySelector('input[name="priority"]:checked').value;

    if(dataPrior == null) return alert('Must select a priority');

    let el = new Todo(dataTitle,dataPrior);
    return el
}

let counter = 0;

export const folder_handler = (element,project) => {


    const button = elementHelper('button',{class:'project-btn'},[`${element.name}`]);

    button.dataset.index = counter;
    counter = counter + 1;
    const newProjectButton = document.querySelector('#project')

    button.addEventListener('click',()=>{       // Start event listener
        
        renderProject(project);                 /* Iterate over all todos in the project,
                                                  render them. */
        console.log(project);
        setFoo(project);                 
    })

    newProjectButton.before(button);

}