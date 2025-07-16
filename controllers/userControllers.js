const db = require('../DB/db');

// Add User
exports.addUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const [result] = await db.execute(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      [name, email]
    );
    console.log(`✅ Inserted user with ID: ${result.insertId}`);
    res.status(201).json({ id: result.insertId, name, email });
  } catch (error) {
    console.error('❌ Error inserting user:', error);
    res.status(500).json({ error: 'Database error' });
  }
};

// Update User
exports.updateUser = async (req, res) => {
  const { name, email } = req.body;
  const userId = req.params.id;

  try {
    const [result] = await db.execute(
      'UPDATE users SET name = ?, email = ? WHERE id = ?',
      [name, email, userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    console.log(`✏️ Updated user with ID: ${userId}`);
    res.json({ id: userId, name, email });
  } catch (error) {
    console.error('❌ Error updating user:', error);
    res.status(500).json({ error: 'Database error' });
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const [result] = await db.execute('DELETE FROM users WHERE id = ?', [userId]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    console.log(`🗑️ Deleted user with ID: ${userId}`);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('❌ Error deleting user:', error);
    res.status(500).json({ error: 'Database error' });
  }
};
