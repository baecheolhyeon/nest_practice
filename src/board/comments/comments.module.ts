import { Module, forwardRef } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Comments, CommentsSchema } from './comments.schema';
import { PostsModule } from '../posts/posts.module';
import { Posts, PostsSchema } from '../posts/posts.schema';
import { CriminalsModule } from 'src/criminals/criminals.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Comments.name, schema: CommentsSchema },
      { name: Posts.name, schema: PostsSchema },
    ]),
    forwardRef(() => PostsModule),
    CriminalsModule,
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
