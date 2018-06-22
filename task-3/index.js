class Emitter {

  /**
   * Создает экземпляр класса Emitter.
   * @memberof Emitter
   */
  constructor() {
    this.events = {};
  }

  /**
   * связывает обработчик с событием
   *
   * @param {String} event - событие
   * @param {Function} handler - обработчик
   * @memberof Emitter
   */
  on(event, handler) {
    const { events } = this;

    if (!events.hasOwnProperty(event)) {
      events[event] = [];
    }
    events[event].push(handler);
  }

  /**
   * Генерирует событие -- вызывает все обработчики, связанные с событием и
   *                       передает им аргумент data
   *
   * @param {String} event
   * @param {*} data
   * @memberof Emitter
   */
  emit(event, data) {
    const { events } = this;

    if (events.hasOwnProperty(event)) {
      events[event].forEach(fn => fn(data));
    }
  }
}

export default Emitter;
