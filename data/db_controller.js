import * as SQLite from 'expo-sqlite';

const version = 1.0;
const db = SQLite.openDatabase('recipes', version);

export default db;