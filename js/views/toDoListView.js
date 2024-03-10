import { toDoItemTemplate } from "/js/templates/toDoItemTemplate";
import { subscribe } from "/js/models/toDoListModel";
import { deleteToDoController } from "/js/controllers/deleteToDoController";

let view

export function toDoListView(){
    view = document.querySelector('#to-do-list')   
    view.addEventListener('click', onHandleClick)
}

subscribe(render)

function render(data){
    const div = document.createElement('div')
    const toDoList = document.querySelector('#item-container')
    toDoList.replaceChildren()
   // const testToDo = div.prepend(toDoItemTemplate(testObject))

    data.forEach((item) =>{
        div.prepend(toDoItemTemplate(item))
    })

    toDoList.append(div)
}

function onHandleClick(e){
    switch (e.target.id){
        case 'delete':
            deleteToDoController(e.target.dataset.uid)
            break
    }
}