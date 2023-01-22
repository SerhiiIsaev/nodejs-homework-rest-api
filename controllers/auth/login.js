const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const User = require("../../models/user")

const { HttpError } = require("../../helpers")

const {SECRET_KEY} = process.env;

const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email});
        if(!user){
            throw HttpError(401, "Email or password wrong");
        }

        if (!user.verify) {
            throw HttpError(401, "Email not verified");
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare) {
            throw HttpError(401, "Email or password wrong");
        }

        const payload = {
            id: user._id,
        }

        const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "24h"})
        await User.findByIdAndUpdate(user._id, {token});
        
        res.json({
            token,
            user: {
                email: user.email,
                subscription: user.subscription,
            }
        }) 
    } catch (error) {
        next(error)
    }
    
}


module.exports = login;