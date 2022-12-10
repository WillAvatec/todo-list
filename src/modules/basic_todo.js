// Objeto clave, todo va girar alrededor de este bad boy.

    // Trying to use some get and set functions(Not real getters and setters, btw)

export default class Todo {
        #title;
        #priority;
        
        constructor(
            title="",
            priority)
            {
            this.setTitle(title);
            this.setPriority(priority);
            this._description = "gibberish";
            this._dueDate = "2023";
        }
        getTitle(){
            return this.#title;
        }
        setTitle(value){
            this.#title = value;
        }
        getPriority(){
            return this.#priority;
        }
        setPriority(value){
            if(value == "high" || value == "low") return this.#priority = value;
            console.log("Invalid value");
            this.#priority = 'low';
        }    
        pushArray(project){
            if(project.includes(this)) return console.log("Ya esta en el array.")
            project.push(this)
        }
    
    }
