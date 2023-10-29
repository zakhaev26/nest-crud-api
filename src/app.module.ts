import { Module } from '@nestjs/common';
import { AlbumsController } from './albums.controller';
import { DynamicController } from './dynamic.controller';
import { PostExtractor } from './extract.post.controller';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers:[UserController,AlbumsController,DynamicController,PostExtractor],
  providers:[UserService]
})

export class AppModule {}
