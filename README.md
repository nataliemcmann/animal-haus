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

When a new user registers, they will be taken to a household login page. From here they can either enter the household name and password provided to them by another user or they can create their own household. Once logged in to a household, the user will remain logged in. If a user creates a household, they are that household's admin and should be mindful to save the household name and password so they can share it with other users.

![screenshot](/documentation/images/joinHousehold.png)

After joining or creating a household, the new user is taken to the pet summary page, where they can see pets of that household or, if the new user is an admin, they can add pets to their household.

Admin users can add pets to their household any time by navigating to the pet summary page using the pawprint icon on the bottom navigation bar. The pet summary page displays all pets that are currently in the app. To add a pet, the admin must provide a pet name and the pet's food amount at minimum. They can add in details like pet age and more detailed instructions of the pet's food and exercise regime. 

![usage](/documentation/images/addPet.gif)

Additionally, on the pet summary page, all users can click on see their pet's details on the pet profile page. Only admin users can edit or delete the pet from this page. Admin users can also create, view, and edit tasks concerning their pet's care on the pet profile page.

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

Tasks can be claimed or unclaimed by the user from each view-- the user page, the pet details page, or the household task page. Tasks can be edited or deleted by the admin in all views as well.

Tasks can be marked complete from the user page or the task page.

![usage](/documentation/images/markComplete.gif)

## Technologies
-Javascript -CSS -HTML

## Acknowledgement
Thanks to Prime Digital Academy who equipped me with the skills to make this application a reality.

## Future Updates
Currently, this app does not adhere to WCAG guidelines, nor is it particularly forgiving of user error. For example, there is no ability to mark a task incomplete if someone "completes" one accidentally. A future update will include more friction for user actions like completing tasks or deleting tasks and pets. Subsequent updates will also seek to improve WCAG compliance and make the layout responsive to difference screen sizes.  

## Bug Report
No known bugs at this time! However, the Heroku server can be quite slow, so if using on Heroku, users may experience a lag between their actions and the site response. So, please be patient!