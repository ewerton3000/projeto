import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { RegistrationModule } from './registration/registration.module';
import { FilesModule } from './files/files.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseProviders } from './database/database.providers';
import { Registration } from './registration/entities/registration.entity';
import { File } from './files/entities/file.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        const dataSource = await databaseProviders[0].useFactory();
        return {
          ...dataSource.options,
          synchronize: true,
        };
      },
    }),
    TypeOrmModule.forFeature([File, Registration]),
    RegistrationModule,
    FilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 