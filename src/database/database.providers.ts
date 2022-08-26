import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from 'src/config/db.config';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    inject: [ConfigService],
    provide: 'DATA_SOURCE',
    useFactory: async (configService: ConfigService) => {
      const DB_CONFIG = configService.get<DatabaseConfig>('database');

      const dataSource = new DataSource({
        type: 'mariadb',
        host: DB_CONFIG.host,
        port: DB_CONFIG.port,
        username: DB_CONFIG.username,
        password: DB_CONFIG.password,
        database: DB_CONFIG.name,
        entities: ['dist/**/*.entity.js'],
        synchronize: DB_CONFIG.synchronize,
      });

      return dataSource.initialize();
    },
  },
];
