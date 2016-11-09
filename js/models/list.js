'use strict';
// List Model

class List{
    constructor(title){
      this.id = Store.lists.length
      this.title = title;
      this.tasks = []
      Store.lists = [...Store.lists.slice(0), this]
    }
    listEl(){
      return `<div class="list" id="${this.id}"><h2><button class="destroy-list" id=${this.id}>x</button>${this.title}</h2><ul id="${this.id}" data-id="${this.id}">${this.lister()}</ul></div>`
    }
    optionEl(){
      return `<option data-id="${this.id}" value="${this.id}">${this.title}</option>`
    }
    static all(){
      return Store.lists.slice(0);
    };
    lister(){
      return this.tasks.reduce((initVal, task) => {
        return initVal + task.liEl()
      },"")
  }
}
