// index.js
import { getToDoData } from "/js/models/toDoListModel";
import { toDoListView } from "./views/toDoListView";

async function appInit(){
     getToDoData()
     toDoListView()
}

appInit()

