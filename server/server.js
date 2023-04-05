const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const householdRouter = require('./routes/households.router');
const petsRouter = require('./routes/pets.router');
const tasksRouter = require('./routes/tasks.router');
const taskUserRouter = require('./routes/tasks_user.router');
const taskCompleteRouter = require('./routes/task_complete.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter); //for user data
app.use('/api/households', householdRouter); //for households data
app.use('/api/pets', petsRouter); //for pet data
app.use('/api/tasks', tasksRouter); //for task data
app.use('/api/tasks_user', taskUserRouter); // for task user relation data
app.use('/api/task_complete', taskCompleteRouter); // for task completion data

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
