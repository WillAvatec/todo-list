import Element from './Classes/element.js'

const container = document.querySelector('.container');

const head = () => {

    // Initialize

    const title = new Element('p').setTextContent('ToDo-List Tracker');
    const titleContainer = new Element('div').setAttributes({class:'title-container'}).addChildren(title).build();

    // Append

    container.appendChild(titleContainer)

}   
