const Pool = require('pg').Pool;

const pool = new Pool({
    user:"postgres",
    password:"20010522m",
    host:"localhost",
    port:"5432",
    database:"authf"
});

module.exports = pool