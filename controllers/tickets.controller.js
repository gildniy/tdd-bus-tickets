const ticketsService = require('../services/tickets.service')
const { all, byId, create } = ticketsService

const getAll = (req, res) => all().then(r => res.json(r))

const getById = (req, res) => byId(req.params.id).
  then(r => r ? res.json(r) : res.status(404).end())

const createNew = (req, res) => create(req.body.name).
  then(r => res.status(201).json(r))

module.exports = { getAll, getById, createNew }
