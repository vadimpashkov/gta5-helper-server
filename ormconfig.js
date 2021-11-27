require('dotenv/config');

module.exports = {
  name: 'development',
  type: 'postgres',
  host: process.env.NODE_ENV === 'production' ? 'postgres' : 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'helper',
  entities: ['dist/server/entities/*.entity.js'],
  migrations: ['dist/server/migrations/*.js'],
  cli: {
    migrationsDir: 'src/server/migrations',
  },
};
