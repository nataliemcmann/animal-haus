# Animal Haus

Can't remember who last fed Fido? Tired of arguing about who cleans the litter box? Organize your hectic household with Animal Haus!

*add screenshot of landing page

## Prerequisites

If not viewing the deployed version of the app on Heroku, you can download and install the app on your local computer.

Before you get started, make sure you have the following software installed:

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)
- [Postico 2](https://eggerapps.at/postico2/)

## Technology

- React.js 
- Redux
- Redux-Saga
- React-Router
- Axios
- DotEnv 
- Express
- Body-parser
- pg
- Passport.js
- Materiul UI

## Installation

1. Make sure PostgreSQL and Postico are installed. Using Postico, create a database called `prime_app`.
2. Run the queries from `database.sql` to set up the database tables in Postico.
3. In your terminal, navigate to the animal-haus directory and run `npm install` to install dependencies.
4. Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
5. Run `npm run server` to start the server and `npm run client`, which will open a new browser tab containing the app. 

## Usage

When a new user registers, they will be taken to the pet summary page and given the option to add or see details of existing pets. At any time, user can click the pawprint on the bottom nav bar to visit this page. 

*gif of new user registering and landing on pet page

To add a pet, users must provide a pet name and the pet's food amount at minimum. They can add in details like pet age and more detailed instructions of the pet's food and exercise regime. 

*gif of add pet form

Once the pet is added, the user is taken back to the pet summary page and they can click on see details to review their new pet's details on the pet profile page. They can edit or delete the pet from this page. They can also create tasks concerning their pet's care on the pet profile page.

*gif of view detail page and adding pet tasks

Tasks can be viewed by pet *screenshot of task list on pet profile page
By user *screenshot of task list on user page
Or by household *screenshot of tasks list on task summary page

Tasks can be claimed or unclaimed by the user from multiple views (user page, task page, and pet details page), indicating that the user is responsible for the completing the task. 

*gif showing claim/unclaim chip action

Tasks can be edited or deleted as well.

*gif show edit and delete actions

Tasks can be marked complete from the user page and the task page. Currently, they cannot be marked uncomplete if someone "completes" one accidentally.

*gif marking task complete

When a current user logins, they will see their user page. The user page contains a list of tasks that the user is responsible for completing for certain pets. A new user will see the pet

## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Update Documentation

Customize this ReadMe and the code comments in this project to read less like a starter repo and more like a project. Here is an example: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2
