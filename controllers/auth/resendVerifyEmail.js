const User = require("../../models/user");
const { HttpError, sendEmail } = require("../../helpers");

const resendVerifyEmail = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            throw HttpError(404);
        }
        if (user.verify) {
            throw HttpError(400, "Verification has already been passed");
        }

        const verifyEmail = {
            to: email,
            subject: "Verify you email",
            html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationToken}">Click verify email</a>`,
        };

        await sendEmail(verifyEmail);

        res.json({
            message: "Verify email resend",
        });
    } catch (error) {
        next(error)
    }
  
};

module.exports = resendVerifyEmail;