class Todo {
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
}

const one = new Todo("lIfe");