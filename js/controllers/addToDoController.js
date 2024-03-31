
//** Task 2 **
import { addToDo } from "../models/toDoListModel";

let form;

export function addToDoController() {
 form = document.querySelector('#add');

 form.addEventListener('submit', handleFormSubmit);

 form.style.display;

 function handleFormSubmit(event) {
    event.preventDefault();
    // Extract form data
    const category = document.querySelector('#category').value;
    const status = document.querySelector('#status').value;
    const todo = document.querySelector('#todo').value;

    addToDo({ category, status, todo });

    form.reset();}
}


    