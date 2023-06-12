let mysql = require('mysql'); // puxa o driver de mysql

module.exports = function(){
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        port: "3306",
        password: "",
        database: "codigogames"
    });
}