const mysql=require('mysql2');
const pool =mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'groupweb'
});



module.exports = pool.promise();