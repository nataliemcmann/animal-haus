const checkHouseholdRelation = (household, req, res, next) => {
    console.log(household)
    if (req.user.householdId === household.id){
        res.sendStatus(403)
    } else {
        next();
    }
}

module.exports = { checkHouseholdRelation }