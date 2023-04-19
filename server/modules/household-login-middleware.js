//ensures that user doesn't create multiple relations to one household
//however, a user to belong to multiple households
const checkHouseholdRelation = (household, req, res, next) => {
    console.log(household)
    if (household.id) {
        if (req.user.householdId === household.id){
            res.sendStatus(403)
        } else {
            next();
        }
    }
}

module.exports = { checkHouseholdRelation }