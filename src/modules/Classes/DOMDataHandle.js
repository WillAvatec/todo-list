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

// This function will be in charge of creating a new 'Project',
// Whenever the newProjectButton is clicked, also makes a
// simple input on the form, so maybe this could need function inside

export const folder_handler = () => {

    const name = document.querySelector()    


    function folderInput(){

        // This will create an input whenever the button is touched


        // IMPORTANT : 

        // DONT MIX LOGIC WITH DOM MANIPULATION

        // THAT IS PART OF THE TASK OF THIS PROJECT
    }
}