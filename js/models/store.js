let store 
let instance 

const createStore = async (todos) => {
    if (instance){
        throw new Error("New instance was not crated")
    }

    instance = 1

    store = todos

    if(store.length) {
        return true
    }
}
const getStore = () => {
    return store
}
//** Task 3 **
function addTostore(form) {
    const newToDo = {
       category: form.elements.category.value,
       status: form.elements.status.value,
       todo: form.elements.todo.value
    };
    database.ref('todos').push(newToDo);
   }
   
const removeFromStore = (uid) => {
    store = store.filter((item) => item.uid !== uid)
    return store
}

const updateStore = (todo) => {
    const index = store.findIndex((item) => item.uid === todo.uid)
    store = [...store.slice(0, index), todo, ...store.slice(index + 1)]
    return store
}

export {addTostore, getStore, createStore, removeFromStore, updateStore}