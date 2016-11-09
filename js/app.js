// Initialize

$(function() { // on document ready
  listController = new ListsController();
  listController.init();
  tasksController = new TasksController();
  tasksController.init();
  $(function() {
    $("#add_list").on('submit', function(element){
      element.preventDefault();
      listController.newList();
      listController.setSelectList();
      listController.displayForms();
    })
  })
  $(function() {
    $("#add_task").on('submit', function(element){
      element.preventDefault();
      tasksController.newTask();
      listController.setSelectList();
      listController.displayForms();

    })
  })
  $(function(){
    $("#lists").on('click', '.destroy-list', function(){
      event.preventDefault()
      listController.deleteList(parseInt(this.id))
      listController.setSelectList()
      listController.displayForms()
    })
  })
  $(function(){
    $("#lists").on('click', '.destroy-task', function(){
      event.preventDefault()
      let parentId = this.parentElement.parentElement.id
      tasksController.deleteTask(parseInt(this.id), parseInt(parentId))
      listController.displayForms()
      listController.setSelectList()
    })
  })
});
//
