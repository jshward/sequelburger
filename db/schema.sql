CREATE DATABASE
IF NOT EXISTS sequel_burgers;
USE sequel_burgers;
-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS burgers;
-- Create the burgers table
CREATE TABLE burgers
(
    id INTEGER NOT NULL
    AUTO_INCREMENT,
    burger_name varchar
    (255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY
    (id)
);
