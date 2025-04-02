import { Injectable } from '@nestjs/common';
import { File } from './entities/file.entity';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(File)
    private photoRepository: Repository<File>,
  ) { }
  
  async salvarDados(file: Express.Multer.File): Promise<File> {
    if (!file) {
      throw new Error('Nenhum arquivo encontrado')
    }
    const arquivo = this.photoRepository.create({
      fileName: file.originalname,
      mimetype: file.mimetype,
      data: file.buffer,
    })
    console.log('file.originalname:', file.originalname);
    return await this.photoRepository.save(arquivo)
  }

  async getImage(id: number): Promise<string> {
    const image = await this.photoRepository.findOneBy({ id })
    if (!image) {
      throw new Error('Image not found')
    }

    const base64 = image.data.toString('base64')
    return `data:${image.mimetype};base64,${base64}`
  }
}
