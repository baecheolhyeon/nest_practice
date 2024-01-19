import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CriminalsRepository } from 'src/criminals/criminals.repository';
import { Comments } from './comments.schema';
import { CreateCommentDto } from './dtos/create.comment.dto';
import { Posts } from '../posts/posts.schema';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Posts.name) private readonly postsModel: Model<Posts>,
    @InjectModel(Comments.name) private readonly commentsModel: Model<Comments>,
    private readonly criminalRepository: CriminalsRepository,
  ) {}

  async createComment(id: string, body: CreateCommentDto) {
    const post = await this.postsModel.findById(id);
    if (!post) {
      throw new UnauthorizedException('오류 발생');
    }
    const comment = await this.commentsModel.create(body);
    post.comments.push(comment);
    await post.save();
    return post;
  }
}
