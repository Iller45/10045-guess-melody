class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Invalid target, AbstractView cannot be created directly`);
    }
  }

  get template() {
    if (this instanceof AbstractView) {
      throw new Error(`No template for abstract view`);
    }
  }

  render() {
    const el = document.createElement(`div`);
    el.innerHTML = this.template.trim();
    return el.children[0];
  }

  bind() {}

  get element() {
    if (!this.el) {
      this.el = this.render();
      this.bind();
    }
    return this.el;
  }
}

export {AbstractView};
