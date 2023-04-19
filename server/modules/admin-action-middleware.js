//ensures that only users with the admin id can make changes
const checkIfAdmin = ( req, res, next) => {
    if (req.user.adminId === req.user.id) {
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = { checkIfAdmin }