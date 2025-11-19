const Component = (function () {
  //Creamos el constructor del componente
  const Constructor = function (options) {
    this.el = options.el;
    this.data = options.data;
    this.template = options.template;
  };

  // Agregar los metodos al prototipo del cosntructor del componente

  // Render UI;
  Constructor.prototype.render = function () {
    const $el = document.querySelector(this.el);
    if (!$el) return;
    $el.innerHTML = this.template(this.data);
  };

  // Actualizar el State de forma Reactiva
  Constructor.prototype.setState = function (obj) {
    for (const key in obj) {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = obj[key];
      }
    }

   this.render();
  };

  // Actualizar el State de forma Reactiva
  Constructor.prototype.getState = function () {
    return JSON.parse(JSON.stringify(this.data))
  };

  return Constructor;
})();

export { Component };
