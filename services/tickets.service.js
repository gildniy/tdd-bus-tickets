const db = require('./tickets.database')
const all = () => db.all()
const byId = (id) => db.byId(id)
const create = (name) => db.insert(name)

module.exports = { all, byId, create }
