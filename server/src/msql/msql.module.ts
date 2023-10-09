import { DynamicModule, Module } from '@nestjs/common';
import { MysqlCoreModule } from './mysql-core.module';
import { MysqlModuleAsyncOptions, MysqlModuleOptions } from './interfaces';

@Module({})
export class MysqlModule {  
  public static forRootAsync(
    options: MysqlModuleAsyncOptions,
    connection: string,
  ): DynamicModule {
    return {
      module: MysqlModule,
      imports: [MysqlCoreModule.forRootAsync(options, connection)],
    };
  }
}
