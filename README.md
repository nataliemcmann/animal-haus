# Animal Haus

Can't remember who last fed Fido? Tired of arguing about who cleans the litter box? Organize your hectic household with Animal Haus!

![screenshot](/documentation/images/home.png)

## Prerequisites

If not viewing the deployed version of [Animal Haus](https://safe-island-91513.herokuapp.com/#/home) on Heroku, you can download and install the app on your local computer. Designed as a mobile application, Animal Haus is best viewed with a screen width of 375px by 667px or a small browser window. 

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

When a new user registers, they will be taken to their user page. 

![usage](/documentation/images/register.gif)

To add a pet, users must navigate to the pet summary page using the pawprint icon on the bottom navigation bar. The pet summary page displays all pets that are currently in the app. To add a pet, users must provide a pet name and the pet's food amount at minimum. They can add in details like pet age and more detailed instructions of the pet's food and exercise regime. 

![usage](/documentation/images/addPet.gif)

Additionally, on the pet summary page, users can click on see their pet's details on the pet profile page. They can edit or delete the pet from this page. They can also create, view, and edit tasks concerning their pet's care on the pet profile page.

View Tasks:
![usage](/documentation/images/viewPet.gif)

Create A Task:
![usage](/documentation/images/createTask.gif)

Users can claim tasks to signal to other household members that they are responsible for completing that task. 

![usage](/documentation/images/claimTask.gif)

Once claimed, the tasks will show up on the user page.

![screenshot](/documentation/images/userPage.png)

All tasks for all pets can be viewed in the Household Task Summary page, which users can reach by clicking on the list icon on the bottom navigation bar. On this page, users can see what other household members are responsible for each task. 

![usage](/documentation/images/householdTaskPage.gif)

Tasks can be claimed or unclaimed by the user from each view-- the user page, the pet details page, or the household task page. Tasks can be edited or deleted in all views as well.

Tasks can be marked complete from the user page or the task page.

![usage](/documentation/images/markComplete.gif)

## Technologies
-Javascript -CSS -HTML

## Acknowledgement
Thanks to Prime Digital Academy who equipped me with the skills to make this application a reality.

## Future Updates
Currently, Animal Haus is lacking a household feature, meaning that all users can add, delete, and edit all pets and tasks. In the near future, I plan to add households, which will allow for heads of households to control who sees their pets and tasks by inviting users to their household with household-specific codes.

Another update will change the task frequency field on task creation from a text input to a menu dropdown and would expand task frequency options from daily to daily, weekly, and monthly. 

And finally, there is no ability to mark a task incomplete if someone "completes" one accidentally. 

## Bug Report
No known bugs at this time!