class Model {
  constructor() {
    this.currentData = [];
  }
  pushToCurrent(data){
    this.currentData.push(data)
  }
  add(a, b){console.log(a+b
    );return a+b}
  subtract(a, b){return a-b}
  divide(a, b){return a/b}
  multiply (a, b){return a * b}
}

class View {
  constructor() {
    this.unevaluated = this.$('#unevaluated');
    this.results = this.$('#results');
    this.buttons = this.$$('.row p');
    this.numbers = this.$$('.num');
  }
  displayResult(data){
    if(data){
      this.results.textContent = data;
    }
    else{
      this.results.textContent = '';
    }
  }
  bindNumClickEvent(){
    this.numbers.forEach(button => button.addEventListener('click', event => {
      console.log("hello")
      return event.target.textContent;
    }))
  }
  //remove later
  becomeRed(){
    this.buttons.forEach(but => but.style.backgroundColor = 'red')
  }

  $ = n => document.querySelector(n);
  $$ = n => document.querySelectorAll(n);
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.bindNumClickEvent();
    this.model.add(3,5)
   }
   handleNumClickEvent = () => {
     //these aren't working
    //  console.log(this.view.bindNumClickEvent());
     console.log("Something")
    //  this.pushToCurrent("aba");
    //  this.view.becomeRed();
   }
}
const app = new Controller(new Model(), new View())














/*
class View {
  constructor() {
    this.button = this.CreateElem('button', 'MVC-button');
    this.app = this.$('#root');
    this.button.textContent = "I've been clicked 0 times"
    this.app.appendChild(this.button);
  }
  CreateElem(el, clsName) {
    const elem = document.createElement(el);
    if (clsName) elem.classList.add(clsName);
    return elem
  }
  $ = n => document.querySelector(n);

  displayText(value) {
    value === 1 ? this.button.textContent = `I've been clicked ${value} time` : this.button.textContent = `I've been clicked ${value} times`;
  }

  bindClickEvent(handler) {
    this.button.addEventListener('click', () => {
      handler();
    })
  }
}
//the methods in the Model and view would be bind methods
//Those in the controller would be handle methods
//In the constructor of the controller, the handle of the controller is fixed inside the bind of the model or view


class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.bindClickEvent(this.handleClickEvent);
  }

  handleClickEvent = () => {
    this.model.incrementTracker();
    this.view.displayText(this.model.tracker);
  }
}
*/