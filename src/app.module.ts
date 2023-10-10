import { Module } from '@nestjs/common';
import { AlbumsController } from './albums.controller';
import { DynamicController } from './dynamic.controller';
import { PostExtractor } from './extract.post.controller';

@Module({
  imports: [],
  controllers:[AlbumsController,DynamicController,PostExtractor],
  providers:[]
})
export class AppModule {}
