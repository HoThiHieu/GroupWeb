const hashHelper = require('../../helpers/hash_helper')
const db = require('../../configs/connectDB')


async function login (req, res){
    try {
        const email = req.body.email;
        const [[dbUser]] = await db.execute(`SELECT * FROM user where email=?`, [email]);
        if (dbUser) {
            if (!hashHelper.compare(req.body.password, dbUser.password)) {
                return res.status(400).json({
                    message: 'Wrong password!',
                })
            }

            return res.status(200).json({
                message: 'Authentication successfully!',
                // token: token,
            })
        } else {
            return res.status(404).json({
                message: 'Email not found!',
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}
module.exports = login
