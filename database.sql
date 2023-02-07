
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

-- create tasks table
CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"taskDesc" VARCHAR (1000) NOT NULL,
	"frequency" VARCHAR (250),
	"petID" INT REFERENCES "pets" NOT NULL
);

-- create task_complete table
CREATE TABLE "task_complete" (
	"id" SERIAL PRIMARY KEY,
	"status" BOOLEAN,
	"timeCompleted" DATE NOT NULL DEFAULT CURRENT_DATE, 
	"taskID" INT REFERENCES "tasks" NOT NULL
);
