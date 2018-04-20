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
    this.wrapper = document.createElement(`div`);
    this.wrapper.innerHTML = this.template;
    return this.wrapper;
  }

  bind() {
  }
}

export {AbstractView};
