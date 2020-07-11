const dbConfig = require("../../../config/env-settings.json").db;

module.exports = {
    default: {
      username: dbConfig.username,
      password: dbConfig.password,
      database: dbConfig.database,
      ...dbConfig.options
    }
  };
