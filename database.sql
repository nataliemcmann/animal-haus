
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

--pets create table
CREATE TABLE "pets" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL,
    "age" VARCHAR (20),
    "food_desc" VARCHAR (1000),
    "cups_per_feeding" DECIMAL (3, 2),
    "exercise_desc" VARCHAR (1000),
    "exercise_min" VARCHAR (20),
    "user_id" INT REFERENCES "user" NOT NULL
);

--pets post query
INSERT INTO "pets" 
    ("name", "age", "food_desc", "cups_per_feeding", 
    "exercise_desc", "exercise_min", "user_id")
VALUES
    ('Bennett', '2 years', 'Fromm Ancient Grains with 1/4 cup water or broth', 1.00, 
    'walking, fetch, tug-of-war, chase, and threshold training', '2 hours', 1);