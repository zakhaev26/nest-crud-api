import { Module } from '@nestjs/common';
import { AlbumsController } from './albums.controller';
import { DynamicController } from './dynamic.controller';
import { PostExtractor } from './extract.post.controller';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Api1Module } from './api1-demonstration/api1.module';
import { Api2Module } from './api2-demonstration copy/api2.module';

@Module({
  imports: [Api1Module,Api2Module/**DemoPurposes! */],
  controllers:[UserController,AlbumsController,DynamicController,PostExtractor],
  providers:[UserService]
})

export class AppModule {}
