import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host     : 'localhost',
    user     : 'novousuario',
    password : 'novasenha',
    database : 'leads_bd'
});

export default pool;