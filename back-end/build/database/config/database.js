"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || '2303',
    database: 'ng-cash',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    dialect: 'postgres',
    logging: false,
};
module.exports = config;
//# sourceMappingURL=database.js.map