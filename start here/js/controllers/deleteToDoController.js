import { deleteToDo } from "/js/models/toDoListModel" 
let dialog 
let deleteButton
let exitButton
let uid

export function deleteToDoController(itemUid){
    uid = itemUid
    dialog = document.querySelector('#delete-to-do')
    exitButton = dialog.querySelector('#exit')
    deleteButton = dialog.querySelector('#delete')
    configureListeners()
    dialog.showModal()

    function configureListeners(){
        exitButton.addEventListener('click', onCloseDiolog)
        deleteButton.addEventListener('click', onRemoveToDo)
    }

    function onCloseDiolog(e){
        dialog.close()
    }

    function onRemoveToDo(e){
        deleteToDo(uid)
        onCloseDiolog()
    }
}

