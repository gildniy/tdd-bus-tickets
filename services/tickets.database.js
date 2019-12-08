class TicketsDatabase {
  constructor() {
    this._data = [];
    this._counter = 0;

    this.insert('ticket_no_1');
    this.insert('ticket_no_2');
  }

  all() {
    return Promise.resolve(this._data);
  }

  byId(id) {
    return Promise.resolve(this._data[id - 1]);
  }

  insert(name) {
    this._counter += 1;
    const record = { id: this._counter, name };
    this._data.push(record);

    return Promise.resolve(record);
  }
}

module.exports =  new TicketsDatabase();
