//ensures that only users with the admin id can make changes
const checkIfAdmin = (user, req, res, next) => {
    console.log(user);
    if (user.adminId === req.user.id) {
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = { checkIfAdmin }