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



const updateUserById = async (request, response) => {
    try {
        const userId = request.params.id

        const [[dbUser]] = await db.execute(`SELECT * FROM user where id=?`, [userId]);
        if (dbUser) {
            const { email, full_name, phone_number, school_name, address } = request.body;
            console.log(school_name);
            await db.execute(`update user set email=?, full_name=?, phone_number=?, school_name=?, address=?  where id=?`
                ,[email, full_name, phone_number, school_name, address, userId])

            const [[user]] = await db.execute(`SELECT * FROM user where id=?`, [userId]);
          
            return response.status(200).json({
                message: 'Update user information successfully!',
                user: user,
            })
        } else {
            return response.status(404).json({
                message: 'User not found!',
            })
        }
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}




module.exports = {
    getAllUser : getAllUser,
    updateUserById: updateUserById
}
