/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setFoo\": () => (/* binding */ setFoo)\n/* harmony export */ });\n/* harmony import */ var _src_modules_Classes_projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/modules/Classes/projects.js */ \"./src/modules/Classes/projects.js\");\n/* harmony import */ var _modules_Classes_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Classes/todo */ \"./src/modules/Classes/todo.js\");\n/* harmony import */ var _modules_renderFuncs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderFuncs.js */ \"./src/modules/renderFuncs.js\");\n/* harmony import */ var _modules_Classes_DOMDataHandle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Classes/DOMDataHandle.js */ \"./src/modules/Classes/DOMDataHandle.js\");\n\n\n\n\n\nconst container = document.querySelector('.content');\n\n// When the user clicks on the todoBtn clicks change DOM main into a form\n\nconst todoBtn = document.querySelector('.todo-btn');\n\ntodoBtn.addEventListener('click',()=>{\n    container.innerHTML = '';       //Prevent multiple forms rendered\n    (0,_modules_renderFuncs_js__WEBPACK_IMPORTED_MODULE_2__.renderTodoForm)()\n})\n\n\n// When the user clicks on the submit button, create a new Todo object,\n// and render the Project todos\n\nconst home = new _src_modules_Classes_projects_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('default')\n\nlet defaultProject = home;\n// export const getFoo = () => defaultProject;\nconst setFoo = (val) => (defaultProject = val);\n\ndocument.addEventListener('click',(ev)=>{\n    const target = ev.target.closest('form > button');\n        if(target){\n\n            ev.preventDefault();                    // Prevent the page from recharge\n\n            const element = (0,_modules_Classes_DOMDataHandle_js__WEBPACK_IMPORTED_MODULE_3__.form_handler)()          // Return new Todo Object\n\n            defaultProject.pushTodo(element)        // Push to the current Project\n\n            container.innerHTML= '';                // Clean Screen\n\n            (0,_modules_renderFuncs_js__WEBPACK_IMPORTED_MODULE_2__.renderProject)(defaultProject);         // Render all projects\n            console.log(defaultProject);\n        }\n})\n\n\n// When clicking on the new project button, create a new project and save it on the localStorage\n\nconst newProjectButton = document.querySelector('#project');\nconst input = document.querySelector('.project-input')\n\nnewProjectButton.addEventListener('click',()=>{\n\n    newProjectButton.classList.toggle('disable');\n    input.classList.remove('disable');\n\n})\n\n// When clicking on close button close, hide the input\n\nconst disable = document.querySelector('.close');\n\ndisable.addEventListener('click',()=>{\n        input.classList.toggle('disable');\n        newProjectButton.classList.toggle('disable');\n})\n\n\n\n// When clicking on accept create a new project and render it\n\nconst acceptBtn = document.querySelector('.accept');\nconst inputTitle = document.querySelector('.title');\n\nlet counter = 0\n\nacceptBtn.addEventListener('click',()=>{\n    if( inputTitle.value !== null && inputTitle.value !== '') {\n\n        newProjectButton.classList.toggle('disable');       // Hide button\n        input.classList.toggle('disable');                  // Show input\n        let temp = new _src_modules_Classes_projects_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](inputTitle.value);\n        defaultProject = temp;            // Create new project\n        (0,_modules_Classes_DOMDataHandle_js__WEBPACK_IMPORTED_MODULE_3__.folder_handler)(temp,temp);                          // Create a button\n        localStorage.setItem(`project ${counter}`,JSON.stringify(defaultProject))  // Save Default in localStorage\n\n        counter++\n\n        inputTitle.value = '';                              // Clean input text\n        console.log(temp)\n        return                                              // :q\n    }\n    alert('Debes escribir el nombre primero.')   \n})\n\n\n//# sourceURL=webpack://newtodo/./src/index.js?");

/***/ }),

/***/ "./src/modules/Classes/DOMDataHandle.js":
/*!**********************************************!*\
  !*** ./src/modules/Classes/DOMDataHandle.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"folder_handler\": () => (/* binding */ folder_handler),\n/* harmony export */   \"form_handler\": () => (/* binding */ form_handler)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index.js */ \"./src/index.js\");\n/* harmony import */ var _renderFuncs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../renderFuncs.js */ \"./src/modules/renderFuncs.js\");\n/* harmony import */ var _elementCreator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementCreator.js */ \"./src/modules/Classes/elementCreator.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo.js */ \"./src/modules/Classes/todo.js\");\n\n\n\n\n\n// This function will transform form data into a todo \n\nconst form_handler = () => {\n\n    const dataTitle = document.querySelector('#title').value;\n    const dataPrior = document.querySelector('input[name=\"priority\"]:checked').value;\n\n    if(dataPrior == null) return alert('Must select a priority');\n\n    let el = new _todo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](dataTitle,dataPrior);\n    return el\n}\n\nlet counter = 0;\n\nconst folder_handler = (element,project) => {\n\n\n    const button = (0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_2__.elementHelper)('button',{class:'project-btn'},[`${element.name}`]);\n\n    button.dataset.index = counter;\n    counter = counter + 1;\n    const newProjectButton = document.querySelector('#project')\n\n    button.addEventListener('click',()=>{       // Start event listener\n        \n        ;(0,_renderFuncs_js__WEBPACK_IMPORTED_MODULE_1__.renderProject)(project);                 /* Iterate over all todos in the project,\n                                                  render them. */\n        console.log(project);\n        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.setFoo)(project);                 \n    })\n\n    newProjectButton.before(button);\n\n}\n\n//# sourceURL=webpack://newtodo/./src/modules/Classes/DOMDataHandle.js?");

/***/ }),

/***/ "./src/modules/Classes/elementCreator.js":
/*!***********************************************!*\
  !*** ./src/modules/Classes/elementCreator.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"elementHelper\": () => (/* binding */ elementHelper)\n/* harmony export */ });\n\n// This SIMPLE AF function will help me to create a new element using just parameters\n\nconst elementHelper = (tag,attr,childs) => {\n\n    const element = document.createElement(tag);\n\n    for (let key in attr){\n\n        element.setAttribute(key,attr[key]);\n    }\n    if(Array.isArray(childs))\n    {\n      childs.forEach(child => {\n        element.appendChild((typeof child === \"string\" || typeof child === \"number\") ? document.createTextNode(child) : child);\n      });\n    }\n\n    return element\n\n}\n\n//# sourceURL=webpack://newtodo/./src/modules/Classes/elementCreator.js?");

/***/ }),

/***/ "./src/modules/Classes/projects.js":
/*!*****************************************!*\
  !*** ./src/modules/Classes/projects.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    constructor(name){\n        this.name = name;\n        this.array = [];\n    }\n\n    pushTodo(todo){\n        this.array.push(todo);\n    }\n\n    get Array(){\n        return this.array\n    }\n}\n\n//# sourceURL=webpack://newtodo/./src/modules/Classes/projects.js?");

/***/ }),

/***/ "./src/modules/Classes/todo.js":
/*!*************************************!*\
  !*** ./src/modules/Classes/todo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n    constructor(title,priority,date,isDone){\n        this.title = title;\n        this.priority = priority;\n        this.date = date;\n        this.isDone = isDone;\n    }\n\n    get todoTitle (){\n        return this.title;\n    }\n\n    set todoTitle (value){\n        this.title = value;\n    }\n\n    get isItDone(){\n        return this.isDone;\n    }\n\n    set isItDone(value){\n        this.isDone = value;\n    }\n}\n\n//# sourceURL=webpack://newtodo/./src/modules/Classes/todo.js?");

/***/ }),

/***/ "./src/modules/renderFuncs.js":
/*!************************************!*\
  !*** ./src/modules/renderFuncs.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderInput\": () => (/* binding */ renderInput),\n/* harmony export */   \"renderProject\": () => (/* binding */ renderProject),\n/* harmony export */   \"renderTodo\": () => (/* binding */ renderTodo),\n/* harmony export */   \"renderTodoForm\": () => (/* binding */ renderTodoForm)\n/* harmony export */ });\n/* harmony import */ var _Classes_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes/elementCreator.js */ \"./src/modules/Classes/elementCreator.js\");\n\n\n// Function that renders a card with the values from the todo \n\nconst container = document.querySelector('.content');\n\n\n// This function charge is to render a new card,\n// whenever the  new todo button is clicked.\n\n// THIS COULD HAVE MORE IMPLEMENTATION USING TODOS\n\nconst renderTodo = (todo) => {\n\n    const close = (0,_Classes_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__.elementHelper)('button',{id:'close'},['X'])\n \n    const priority = (0,_Classes_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__.elementHelper)('p',{id:'priority'},[\n        `Priority : ${todo.priority.toUpperCase()}`\n    ])\n    const title = (0,_Classes_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__.elementHelper)('h4',{class:'title'},[todo.todoTitle])\n    const body = (0,_Classes_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__.elementHelper)('div',{class:'body'},[priority]);\n    const head = (0,_Classes_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__.elementHelper)('div',{class:'head'},[title])\n    const card_body = (0,_Classes_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__.elementHelper)('div',{class:'todo-body'},[close,head,body])\n    const div = (0,_Classes_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__.elementHelper)('div',{class:'todo-card'},[card_body]);\n\n\n    container.appendChild(div);\n}\n\n\n\n\n// This function renders a form\n\nconst renderTodoForm = () => {\n\n    // button to submit\n\n    const Submit = (0,_Classes_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__.elementHelper)('button',{type:'submit'},['Create New Todo'])\n\n    // Using radio btn to select value\n\n    const PriorityInput2 = (0,_Classes_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__.elementHelper)('input',{type:'radio',id:'priority',name:'priority',value:'high'})\n    const PriorityInput1 = (0,_Classes_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__.elementHelper)('input',{type:'radio',id:'priority',name:'priority',value:'low'})\n    const PriorityLabel = (0,_Classes_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__.elementHelper)('label',{for:'priority'},['Prioridad :'])\n    const PriorityDiv = (0,_Classes_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__.elementHelper)('div',{class:'priority-container'},[PriorityLabel,PriorityInput1,PriorityInput2])\n\n    // Using text input to create a new name\n\n    const TitleInput = (0,_Classes_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__.elementHelper)('input',{type:'text',id:'title',name:'title'})\n    const TitleLabel = (0,_Classes_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__.elementHelper)('label',{for:'title'},['Tarea :'])\n    const TitleDiv = (0,_Classes_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__.elementHelper)('div',{class:'title-container'},[TitleLabel,TitleInput])\n\n    // Some text to make the form look less empty\n\n    const TypePls = (0,_Classes_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__.elementHelper)('p',{},['Kindly fill the form'])\n\n\n    const form = (0,_Classes_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__.elementHelper)('form',{class:'todo-form'},[TypePls,TitleDiv,PriorityDiv,Submit])\n\n    container.appendChild(form);\n\n    PriorityInput2.before('Alta');\n    PriorityInput1.before('Baja');\n\n}\n\n// This renders all the todos in the current project\n\nconst renderProject = (project) => {\n\n    container.innerHTML = '';\n    project.array.forEach(todo => {\n        renderTodo(todo);\n    });\n}\n\n// This renders an input for the creation of new  projects\n\nconst renderInput = (btn)=> {\n\n    const Close =       (0,_Classes_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__.elementHelper)('button',{class:'close'},['Cerrar'])\n    const Accept =      (0,_Classes_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__.elementHelper)('button',{class:'accept'},['Aceptar'])\n    const titleInput =  (0,_Classes_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__.elementHelper)('input',{class:'new-project'});\n    const div =         (0,_Classes_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__.elementHelper)('div',{class:'project-input'},[titleInput,Accept,Close]);\n\n    btn.before(div);\n}\n\n//# sourceURL=webpack://newtodo/./src/modules/renderFuncs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;