import { ConnectionOptions } from 'typeorm';

export const connection: ConnectionOptions = {
  name: 'default',
  type: 'postgres',
  host: process.env.NODE_ENV === 'production' ? 'postgres' : 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'helper',
  entities: ['dist/server/entities/*.entity.js'],
  migrations: ['dist/server/migrations/*.js'],
  migrationsRun: true,
  cli: {
    migrationsDir: 'src/server/migrations',
  },
};
