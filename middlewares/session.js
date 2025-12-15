const sessionMiddleware = (req, res, next) => {
    res.locals.currentUser = req.session.currentUser || null;
    next();
};

module.exports = sessionMiddleware;