
// This SIMPLE AF function will help me to create a new element using just parameters

export const elementHelper = (tag,attr,childs) => {

    const element = document.createElement(tag);

    for (let key in attr){

        element.setAttribute(key,attr[key]);
    }
    if(Array.isArray(childs))
    {
      childs.forEach(child => {
        element.appendChild((typeof child === "string" || typeof child === "number") ? document.createTextNode(child) : child);
      });
    }

    return element

}