const hashHelper = require('../../helpers/hash_helper')
const db = require('../../configs/connectDB')

async function register(req, res) {
    try {
        // Check if email already registered
        const [[dbUser]] = await db.execute(`SELECT * FROM user where email=?`, [req.body.email]);
        if (dbUser) {
            return res.status(409).json({
                message: 'Email already exists!',
            })
        }
        const { email, full_name, gender, birthday, password } = req.body;
        await db.execute('insert into user(email, full_name, gender, birthday, password) values (?, ?, ?, ?, ?)',
            [email, full_name, gender, birthday, hashHelper.hash(password)]);
        return res.status(201).json({
            message: 'Create user successfully!',
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

module.exports = register
