class Model {
  constructor() {
    this.tracker = 0;
  }
  incrementTracker() {
    this.tracker++;
  }
}

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
const app = new Controller(new Model(), new View())