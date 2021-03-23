DROP DATABASE IF EXISTS catwalk;

CREATE DATABASE catwalk;
\c catwalk

CREATE TABLE IF NOT EXISTS product(
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slogan VARCHAR(255),
  description VARCHAR(500),
  category VARCHAR(255) NOT NULL,
  default_price NUMERIC NOT NULL
);

CREATE TABLE IF NOT EXISTS related(
  id SERIAL NOT NULL PRIMARY KEY,
  current_product_id INTEGER NOT NULL,
  related_product_id INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS features(
  id SERIAL NOT NULL PRIMARY KEY,
  product_id INTEGER NOT NULL,
  feature VARCHAR(255),
  value VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS styles(
  id SERIAL NOT NULL PRIMARY KEY,
  product_id INTEGER NOT NULL,
  name VARCHAR(255),
  sale_price NUMERIC,
  original_price NUMERIC,
  default_style BOOLEAN
);

CREATE TABLE IF NOT EXISTS photos(
  id INTEGER NOT NULL PRIMARY KEY,
  styleId INTEGER NOT NULL,
  url VARCHAR(255),
  thumbnail_url VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS skus(
  id SERIAL NOT NULL PRIMARY KEY,
  styleId INTEGER NOT NULL,
  size VARCHAR(255),
  quantity INTEGER
);

-- \COPY product FROM 'csv/product.csv' DELIMITER ',' CSV HEADER NULL AS 'null';
-- \COPY related FROM 'csv/related.csv' DELIMITER ',' CSV HEADER NULL AS 'null';
-- \COPY features FROM 'csv/features.csv' DELIMITER ',' CSV NULL AS 'null';
-- \COPY styles FROM 'csv/styles.csv' DELIMITER ',' CSV HEADER NULL AS 'null';
-- \COPY photos FROM 'csv/photos.csv' DELIMITER ',' CSV HEADER NULL AS 'null';
-- \COPY skus FROM 'csv/skus.csv' DELIMITER ',' CSV HEADER NULL AS 'null';
-- SELECT setval(pg_get_serial_sequence('product', 'id'), (SELECT MAX(id) FROM product));
-- SELECT setval(pg_get_serial_sequence('related', 'id'), (SELECT MAX(id) FROM related));
-- SELECT setval(pg_get_serial_sequence('features', 'id'), (SELECT MAX(id) FROM features));
-- SELECT setval(pg_get_serial_sequence('styles', 'id'), (SELECT MAX(id) FROM styles));
-- SELECT setval(pg_get_serial_sequence('photos', 'id'), (SELECT MAX(id) FROM photos));
-- SELECT setval(pg_get_serial_sequence('skus', 'id'), (SELECT MAX(id) FROM skus));
