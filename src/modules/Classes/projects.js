export default class Project {
    constructor(name){
        this.name = name;
        this.array = [];
    }

    pushTodo(todo){
        this.array.push(todo);
    }
}