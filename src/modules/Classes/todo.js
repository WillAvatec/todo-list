export default class Todo {
    constructor(title,priority,date,isDone){
        this.title = title;
        this.priority = priority;
        this.date = date;
        this.isDone = isDone;
    }

    get todoTitle (){
        return this.title;
    }

    set todoTitle (value){
        this.title = value;
    }

    get isItDone(){
        return this.isDone;
    }

    set isItDone(value){
        this.isDone = value;
    }
}