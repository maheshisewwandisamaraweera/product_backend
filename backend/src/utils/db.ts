import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const dbPromise = open({
  filename: process.env.DATABASE_URL || './database.sqlite',
  driver: sqlite3.Database
});

export default {
  async run(query: string, params: any = []) {
    const db = await dbPromise;
    return db.run(query, params);
  },
  async get(query: string, params: any = []) {
    const db = await dbPromise;
    return db.get(query, params);
  },
  async all(query: string, params: any = []) {
    const db = await dbPromise;
    return db.all(query, params);
  }
};
