import { Module } from '@nestjs/common';
import { FilesService } from './files.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import * as multer from 'multer';
import { MulterModule } from '@nestjs/platform-express';
import { File } from './entities/file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([File]),
  MulterModule.register({
    storage:multer.memoryStorage(),
  })
  ],
  controllers: [],
  providers: [FilesService],
})
export class FilesModule { }
   