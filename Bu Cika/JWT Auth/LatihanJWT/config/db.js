require('dotenv').config();
const mysql = require('mysql2/promise');

// 
const dbUrl = process.env.DATABASE_URL || '';
if (!dbUrl) {
    throw new Error("DATABASE_URL Belum di Setting di .env");
    
}

// 
const url = new URL(dbUrl);

// bikin bank connect
const pool = mysql.createPool({
    host: url.hostname,
    user: url.username,
    password: url.password,
    database: url.password,
    database: url.pathname.replace(/^\//, ''),
    port: url.port ? Number(url.port) : 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;