class AbstractView {
  constructor() {

  }
  get template() {
  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }
    return this._element;
  }

  render() {
    this._div = document.createElement(`div`);
    this._div.innerHTML = this.template;
    return this._div;
  }

  bind() {
  }
}

export {AbstractView};
