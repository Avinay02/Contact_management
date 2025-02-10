const express = require('express')
const Contact = require('../models/contact')
const {validateContact} = require('../validators/contactValidator')
const router = express.Router()

// GET /contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
  } catch (err) {
    res.status(500).json({error: 'Failed to fetch contacts'})
  }
})

// POST /contacts
router.post('/', async (req, res) => {
  const {name, email, phone, address} = req.body

  // Input validation
  const {error} = validateContact(req.body)
  if (error) {
    console.error('Validation Error:', error.details)
    return res.status(400).send(error.details[0].message) // Send validation error response
  }

  try {
    const newContact = new Contact({name, email, phone, address})
    await newContact.save()
    res.status(201).json(newContact)
  } catch (err) {
    console.error('Database Error:', err) // Log the error to the console
    res.status(500).json({error: 'Failed to create contact'}) // Send failure message
  }
})

// PUT /contacts/:id
router.put('/:id', async (req, res) => {
  const {name, email, phone, address} = req.body
  const {id} = req.params

  // Validate input
  const {error} = validateContact(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      {name, email, phone, address},
      {new: true},
    )
    if (!updatedContact)
      return res.status(404).json({message: 'Contact not found'})
    res.status(200).json(updatedContact)
  } catch (err) {
    res.status(500).json({error: 'Failed to update contact'})
  }
})

// DELETE /contacts/:id
router.delete('/:id', async (req, res) => {
  const {id} = req.params

  try {
    const deletedContact = await Contact.findByIdAndDelete(id)
    if (!deletedContact)
      return res.status(404).json({message: 'Contact not found'})
    res.status(200).json({message: 'Contact deleted successfully'})
  } catch (err) {
    res.status(500).json({error: 'Failed to delete contact'})
  }
})

// GET /contacts/:id
router.get('/:id', async (req, res) => {
  const {id} = req.params

  try {
    const contact = await Contact.findById(id)
    if (!contact) return res.status(404).json({message: 'Contact not found'})
    res.status(200).json(contact)
  } catch (err) {
    res.status(500).json({error: 'Failed to fetch contact'})
  }
})

// GET /contacts/search
router.get('/search', async (req, res) => {
  const {name, email} = req.query

  try {
    const filter = {}
    if (name) filter.name = new RegExp(name, 'i')
    if (email) filter.email = new RegExp(email, 'i')

    const contacts = await Contact.find(filter)
    res.status(200).json(contacts)
  } catch (err) {
    res.status(500).json({error: 'Failed to search contacts'})
  }
})

module.exports = router
