const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.post('/authenticate', authenticate);
router.get('/authorised', authorised);
router.get('/', getAll);

module.exports = router;

function authorised(req, res, next) {
    res.json({success: true, user: req.user})
}

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => {
            return user
                    ? res.json({success: true, ...user})
                    : res.status(400).json({
                        success: false,
                        message: 'Username or password is incorrect',
                        errorCode: 'INVALID_CREDENTIALS'
                    })
        })
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}
