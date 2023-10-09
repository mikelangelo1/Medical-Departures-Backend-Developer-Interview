import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MysqlModule } from './msql/msql.module';
import { UserModule } from './user/user.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { LoggerModule } from './logging/loggers/nestLogger/logger.module';
import { appConfig } from './app.config';
import { ServeStaticModule } from '@nestjs/serve-static';
import path from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  imports: [
    MysqlModule.forRootAsync(
      {
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (config: ConfigService) => ({
          host: config.get<string>('MYSQL_HOST_CONNECT_DB_ONE'),
          database: config.get<string>('MYSQL_DB_CONNECT_DB_ONE'),
          password: config.get<string>('MYSQL_PASSWORD_CONNECT_DB_ONE'),
          user: config.get<string>('MYSQL_USER_CONNECT_DB_ONE'),
          port: config.get<number>('MYSQL_PORT_CONNECT_DB_ONE'),
        }),
      },
      'db1Connection',
    ),
    LoggerModule.register(appConfig.logging.options),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'static'),
      renderPath: 'static/*',
    }),
    UserModule,
    PostsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],  
})
export class AppModule {}
