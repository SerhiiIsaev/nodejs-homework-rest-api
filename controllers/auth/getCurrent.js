

const getCurrent = async (req, res, next) => {
    console.log(req.body)
    try {
        const {subscription, email} = req.user;
        res.json({
            email,
            subscription,
        })
    } catch (error) {
        next(error)
    }
    
}

module.exports = getCurrent;