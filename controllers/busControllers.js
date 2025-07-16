const db = require('../DB/db');

exports.addBus = async (req, res) => {
  const { busNumber, totalSeats, availableSeats } = req.body;
  try {
    const [result] = await db.execute(
      'INSERT INTO buses (busNumber, totalSeats, availableSeats) VALUES (?, ?, ?)',
      [busNumber, totalSeats, availableSeats]
    );
    res.status(201).json({ id: result.insertId, busNumber, totalSeats, availableSeats });
  } catch (err) {
    console.error('Error adding bus:', err);
    res.status(500).json({ error: 'Database error' });
  }
};

exports.getAvailableBuses = async (req, res) => {
  const minSeats = parseInt(req.params.seats, 10);
  try {
    const [buses] = await db.execute(
      'SELECT * FROM buses WHERE availableSeats > ?',
      [minSeats]
    );
    res.json(buses);
  } catch (err) {
    console.error('Error retrieving buses:', err);
    res.status(500).json({ error: 'Database error' });
  }
};
