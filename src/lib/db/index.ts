import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'anime.db');
const db = new Database(dbPath);

// Initialize schema
db.exec(`
  CREATE TABLE IF NOT EXISTS anime (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    url TEXT UNIQUE,
    image TEXT,
    type TEXT,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS episodes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    anime_id TEXT,
    title TEXT,
    url TEXT UNIQUE,
    stream_data TEXT, -- JSON string of streams
    episode_list TEXT, -- NEW: JSON string of all episodes
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (anime_id) REFERENCES anime(id)
  );

  CREATE INDEX IF NOT EXISTS idx_anime_title ON anime(title);
  CREATE INDEX IF NOT EXISTS idx_episodes_anime_id ON episodes(anime_id);
`);

export default db;
