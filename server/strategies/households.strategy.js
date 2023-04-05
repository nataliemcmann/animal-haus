const passport = require('passport');
const passportCustom = require('passport-custom');
const CustomStrategy = passportCustom.Strategy;
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');

// Does actual work of logging in
passport.use(
    'custom',
    new CustomStrategy((householdName, householdCode, done) => {
    pool
    .query('SELECT * FROM "households" WHERE householdName = $1', [householdName])
    .then((result) => {
        const household = result && result.rows && result.rows[0];
        if (household && encryptLib.comparePassword(householdCode, household.householdCode)) {
        // All good! Passwords match!
        // done takes an error (null in this case) and a household
        done(null, household);
        } else {
        // Not good! Household name and code do not match.
        // done takes an error (null in this case) and a Household (also null in this case)
        // this will result in the server returning a 401 status code
        done(null, null);
        }
    })
    .catch((error) => {
        console.log('Error with query for household ', error);
        // done takes an error (we have one) and a Household (null in this case)
        // this will result in the server returning a 500 status code
        done(error, null);
    });
})
);

module.exports = passport;

