import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MysqlModule } from './msql/msql.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    MysqlModule.forRoot({
      host: '127.0.0.1',
      database: 'medical_departures',
      password: 'Akinolami6650',
      user: 'root',
      port: 3306,
    }),
    UsersModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],  
})
export class AppModule {}
