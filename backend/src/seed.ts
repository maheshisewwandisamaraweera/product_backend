import db from './utils/db';

const seed = async () => {
  try {
    // Create products table if not exists
    await db.run(`CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price REAL NOT NULL,
      description TEXT
    )`);

    // Insert sample products
    await db.run('INSERT INTO products (name, price, description) VALUES (?, ?, ?)', [
      'Product A',
      10.99,
      'Description for Product A'
    ]);
    await db.run('INSERT INTO products (name, price, description) VALUES (?, ?, ?)', [
      'Product B',
      19.99,
      'Description for Product B'
    ]);

    console.log('Seeding successful!');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
};

seed();
