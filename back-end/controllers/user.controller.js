const db = require('../configs/connectDB')


const getAllUser = async (req, res) => {
    try {
        const [dbUser] = await db.execute('SELECT * FROM user ');
        return res.status(200).json(dbUser)
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}


const getUserByEmail = async (req, res) => {
    try {
        const [dbUser] = await db.execute(`SELECT * FROM user where id=?`, [req.body.email]);
        return res.status(200).json(data)
    } catch (error) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}



module.exports = {
    getAllUser : getAllUser,
}
