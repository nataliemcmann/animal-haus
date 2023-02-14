
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- create user table
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- create pets table
CREATE TABLE "pets" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL,
    "age" VARCHAR (20),
    "foodDesc" VARCHAR (1000),
    "cupsPerFeed" DECIMAL (3, 2),
    "exerciseDesc" VARCHAR (1000),
    "exerciseMin" VARCHAR (20),
    "userId" INT REFERENCES "user" NOT NULL ON DELETE CASCADE
);

-- create tasks table
CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"taskDesc" VARCHAR (1000) NOT NULL,
	"frequency" VARCHAR (250),
	"petID" INT REFERENCES "pets" NOT NULL ON DELETE CASCADE
);

-- create task_complete table
CREATE TABLE "task_complete" (
	"id" SERIAL PRIMARY KEY,
	"timeCompleted" DATE NOT NULL DEFAULT CURRENT_DATE, 
	"taskID" INT REFERENCES "tasks" NOT NULL ON DELETE CASCADE
);

-- create tasks_user join
CREATE TABLE "tasks_user" (
	"id" SERIAL PRIMARY KEY,
	"taskID" INT REFERENCES "tasks" NOT NULL ON DELETE CASCADE
	"userID" INT REFERENCES "user" NOT NULL ON DELETE CASCADE
);
