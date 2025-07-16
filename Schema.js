// schema.js
const connection = require('./DB/db');

// Users Table
const createUsers = `
CREATE TABLE IF NOT EXISTS Users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE
);
`;

// Buses Table
const createBuses = `
CREATE TABLE IF NOT EXISTS Buses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  busNumber VARCHAR(50) NOT NULL UNIQUE,
  totalSeats INT NOT NULL,
  availableSeats INT NOT NULL
);
`;

// Bookings Table
const createBookings = `
CREATE TABLE IF NOT EXISTS Bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  seatNumber INT NOT NULL
);
`;

// Payments Table
const createPayments = `
CREATE TABLE IF NOT EXISTS Payments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  amountPaid DECIMAL(10, 2) NOT NULL,
  paymentStatus VARCHAR(50) NOT NULL
);
`;

// Run all queries
connection.query(createUsers, (err) => {
  if (err) throw err;
  console.log("Users table created.");
});

connection.query(createBuses, (err) => {
  if (err) throw err;
  console.log("Buses table created.");
});

connection.query(createBookings, (err) => {
  if (err) throw err;
  console.log("Bookings table created.");
});

connection.query(createPayments, (err) => {
  if (err) throw err;
  console.log("Payments table created.");
});
