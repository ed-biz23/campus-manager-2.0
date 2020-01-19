require("dotenv").config();

module.exports = {
  development: {
    use_env_variable: process.env.DB_URI
  },
  test: {
    username: "postgres",
    password: "password",
    database: "campus_manager_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres"
  }
};
