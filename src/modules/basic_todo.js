// Objeto clave, todo va girar alrededor de este bad boy.

    // Trying to use some get and set functions(Not real getters and setters, btw)

export default class Todo {
        #title;
        
        constructor(title){
            this.setTitle(title);
            this._description = "gibberish";
            this._dueDate = "2022-12-09";
            this._priority = "low";
        }
        getTitle(){
            return this.#title;
        }
        setTitle(value){
            this.#title = value;
        }    
        pushArray(project){
            if(project.includes(this)) return console.log("Ya esta en el array.")
            project.push(this)
        }
    
    }
