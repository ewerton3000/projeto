import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UploadedFiles, HttpException, HttpStatus, Query } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import multerConfig from 'src/files/multer.config';


@Controller('registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post()
  create(@Body() createRegistrationDto: CreateRegistrationDto) {
    return this.registrationService.create(createRegistrationDto);
  }

  @Post('upload')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'photo', maxCount: 1 },
      { name: 'copy_of_professional_registration', maxCount: 1 },
    ], multerConfig)
  )
  async createRegistrationWithFiles(
    @Body() registrationData: any,
    @UploadedFiles()
    files: { 
      photo?: Express.Multer.File[], 
      copy_of_professional_registration?: Express.Multer.File[] 
    },
  ) {
    if (!files.photo || !files.copy_of_professional_registration) {
      console.log('arquivo',files.copy_of_professional_registration)
      throw new Error('Ambos os arquivos devem ser enviados');
    }

    const photoFile = files.photo[0];
    const registrationFile = files.copy_of_professional_registration[0];
     
    
    return this.registrationService.saveRegistrationFiles(
      registrationData,
      photoFile,
      registrationFile
    );
  }
  

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registrationService.findOne(+id);
  }

  @Get()
  async finding(@Query() query: any) {
    return this.registrationService.finding(query);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegistrationDto: UpdateRegistrationDto) {
    return this.registrationService.update(+id, updateRegistrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registrationService.remove(+id);
  }
}
     