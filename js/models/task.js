'use strict';
// Task Model
class Task{
  constructor(type, priority, list){
    this.id = list.tasks.length;
    this.list_id = list.id
    this.type = type;
    this.priority = priority;
    list.tasks.push(this)
    Store.tasks = [...Store.tasks.slice(0), this]
  }
  liEl(){
    return `<li data-id="${this.id}"><button class="destroy-task" id="${this.id}">x</button> ${this.type}, ${this.priority}</li>`
  }
  build(){

  }
  

}
