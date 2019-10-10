class Model {
  constructor() {
    this.currentData = [];
  }
  pushToCurrent(data) {
    this.currentData.push(data)
  }
  evaluate(string) {
    return eval(string)
  }
  joinData() {
    return this.currentData.join('');
  }
  add(a, b) {
    console.log(a + b
    ); return a + b
  }
  subtract(a, b) { return a - b }
  divide(a, b) { return a / b }
  multiply(a, b) { return a * b }
}

class View {
  constructor() {
    this.unevaluated = this.$('#unevaluated');
    this.results = this.$('#results');
    this.buttons = this.$$('.row p');
    this.numbers = this.$$('.directOutput');
  }
  bindCollectUnevaluated(handler) {
    this.$('#evaluate-button').onclick = () => {
      let a = this.unevaluated.textContent;
      handler(a);
    }
  }
  bindNumClickEvent(handler) {
    this.numbers.forEach(button => button.addEventListener('click', event => {
      handler(event.target.textContent)
    }))
  }
  displayUnevaluated(text) {
    this.unevaluated.textContent += text;
  }
  displayResults(data){
    this.results.textContent = data;
  }
  $ = n => document.querySelector(n);
  $$ = n => document.querySelectorAll(n);
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.bindNumClickEvent(this.handleNumClickEvent);
    this.view.bindCollectUnevaluated(this.handleComputation);
  }
  handleNumClickEvent = textContent => {
    this.model.pushToCurrent(textContent);
    this.view.displayUnevaluated(textContent);
  }
  handleComputation = data => {
    let b = this.model.evaluate(data);
    this.view.displayResults(b);
  }
}
const app = new Controller(new Model(), new View())