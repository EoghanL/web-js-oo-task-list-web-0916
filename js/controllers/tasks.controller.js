'use strict';
// Tasks Controller
class TasksController{
  init(){
  };
  newTask(){
    let list_id = parseInt($("#select_list").val())
    let list = List.all().filter(function(element){
      if(element.id !== undefined){
        return element.id === list_id
      }
    })[0]
    let type = $("#task_description").val()
    let priority = $("#task_priority").val()
    new Task(type, priority, list)
    $("#task_description").val('')
    $("#task_priority").val('')
  }

  deleteTask(id, listId){
    let list = this.getList(listId)[0]
    delete list.tasks[id]
    delete Store.tasks[id]

  }
  getTask(id){
    return Store.tasks.filter((element) => {
      return element.id === id
    })
  }
  getList(id){
    return Store.lists.filter((element) => {
      return element.id === id
      }
    )
  }
}
