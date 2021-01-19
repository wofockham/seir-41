CREATE TABLE planets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image TEXT,
  orbit FLOAT,
  diameter FLOAT,
  mass FLOAT,
  distance_from_earth FLOAT,
  moons INTEGER
);

-- Don't do seed data in your .sql anymore: use seeds.rb.
