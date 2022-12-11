export default class Element {
    constructor(tag){
        this.tag = tag;
        this.attributes = {};
        this.children = [];
        this.listeners = {click:'ev'};
    }
    
    build(){

        // This is the element created when the build function is called

        const element = document.createElement(this.tag);

        // Iterate over the attributes and set then;

        for (const attr in this.attributes){
            element.setAttribute(attr,this.attributes[attr]);
        }

/*         // Append childs from the constructor -- Not sure if this works yet

        for (const child in this.children){
            element.appendChild(child,this.children);
        } */

        // Append eventListeners to element

        for (const listen in this.listeners){
            this.listeners[listen].forEach(cb =>{
                element.addEventListener(listen,cb);
            })
        }
        
        // Append childs only if the element doesn't have text

        if(this.text !== undefined ){
            for(const virtual of children ){
                element.appendChild(virtual.build())
            }
        }else {
            document.textContent = this.text;
        }

        // After taking the element here and there, finally let's return it like [  let variable =  whatever.build()   ===   variable = element   ]

        return element;
    }

    setAttributes(object){
        Object.assign(this.attributes,object);

        return this;
    }

    addChildren(value){
        this.text = undefined;
        this.children.push(value);

        return this;
    }

    setTextContent(value){
        this.text = value;

        return this;
    }

    setListeners(e,callback){
        if(this.listeners[e]){
            this.listeners.push(callback)
        }else {
            [callback] = this.listeners[e] ;
        }

        return this;
    }
}
