const express = require('express');
const router = express.Router();
const {
  addUser,
  updateUser,
  getAllUsers,
  deleteUser,
} = require('../controllers/userControllers');

router.post('/', addUser);
router.put('/:id', updateUser);
router.get('/', getAllUsers);
router.delete('/:id', deleteUser);

module.exports = router;
