import { Module } from '@nestjs/common';
import { ImagesController } from 'controllers/images.controller';
import { ImagesService } from 'services/images.service';

@Module({
	controllers: [ImagesController],
	providers: [ImagesService]
})
export class ImagesModule { }
