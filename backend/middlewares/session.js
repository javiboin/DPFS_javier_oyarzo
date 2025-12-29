const sessionMiddleware = (req, res, next) => {
    if (req.session.currentUser) {
        // Sesión válida - usuario logueado
        res.locals.currentUser = req.session.currentUser;
        res.locals.isLoggedIn = true;
    } else {
        // No hay sesión válida - usuario no logueado
        res.locals.currentUser = null;
        res.locals.isLoggedIn = false;
    }
    
    next();
};

module.exports = sessionMiddleware;