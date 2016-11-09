'use strict';
// Lists Controller
class ListsController{
  init(){
  };
  newList(){
    let title = $("#list_title").val();
    new List(title);
    $("#list_title").val('');
  };
  setSelectList(){
    $("#select_list").empty()
    Store.lists.forEach((list) => {
      if(list !== undefined){
        $("#select_list").append(list.optionEl())
      }

    })
  }
  displayForms(){
    $("#lists").empty()
    Store.lists.forEach((list) => {
      if(list !== undefined){
        $("#lists").append(list.listEl())
      }
    })
  }
  deleteList(id){
    delete Store.lists[id]
  }
}
