const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const { secret } = require("../config/jwt");


class UserController {
    register(req, res) {
        const user = new User(req.body);
        user.save()
            .then(() => {
                res
                    .cookie("usertoken", jwt.sign({ _id: user._id }, secret), { httpOnly: true })
                    .json({ message : "success!" , user :user})

            })
            .catch(err => res.json(err))
    }


    login(req, res) {
        User.findOne({ email: req.body.email })
            .then(user => {
                if (user == null) {
                    res.json({ message : "Invalid login attempt" }) //email is not found
                } else {
                    bcrypt.compare(req.body.password, user.password)
                        .then(passwordIsValid => {
                            if (passwordIsValid) {
                                res.cookie("usertoken", jwt.sign({ _id: user._id }, secret), { httpOnly: true })
                                    .json({ message: "success!" });
                            } else {
                                res.json({ message: "Invalid login attempt" }) //incorrect password
                            }
                        })
                        .catch(err => res.status(400).json({ message: "Invalid login attempt2", error: err }))
                }
            }).catch(err => res.json(err))

    }
    googleLogin(req, res) {
        User.findOne({ email: req.body.email })
            .then(user => {
                bcrypt.compare(req.body.googleId, user.password)
                    .then(passwordIsValid => {
                        if (passwordIsValid) {
                            res
                                .cookie("usertoken", jwt.sign({ _id: user._id }, secret), { httpOnly: true })
                                .json({ message: "success!" });
                        }
                    })

            }).catch(err => {
                const user = new User({
                    profileAvatar : req.body.imageUrl,
                    username : req.body.name,
                    email : req.body.email,
                    password : req.body.googleId,
                    confirm : req.body.googleId
                });
                user.save()
                    .then(() => {
                        res
                            .cookie("usertoken", jwt.sign({ _id: user._id }, secret), { httpOnly: true })
                            .json({  message : "success!"})

                    })
                    .catch(err => res.json({err :err,info : req.body}))
            })
    }



    getLoggedInUser(req, res) {
        const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });
        User.findById(decodedJWT.payload._id)
            .then(user => res.json(user))
            .catch(err => res.json(err))

    }

    logout(req, res) {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    }
    findOneUserByEmail = (req, res) => {
        User.findOne({ email: req.params.email })
            .then(user => res.json({ user: user }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }))
    };
    deleteUser = (req, res) => {
        User.deleteOne({ _id: req.params.id })
            .then(result => res.json({ result: result }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }
    findAllUsers = (req, res) => {
        User.find()
            .then(allUsers => res.json({ users: allUsers }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }
    updateUser = (req, res) => {
        User.findOneAndUpdate({_id : req.params.id} , req.body)
        .then(updateUser => res.json({user : updateUser, message : 'success!'}))
        .catch(err => res.json(err))
    }
}


module.exports = new UserController();