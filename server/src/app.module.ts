import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MsqlModule } from './msql/msql.module';

@Module({
  imports: [MsqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
