import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Posts } from './posts.schema';
import { Model } from 'mongoose';
import { CriminalsRepository } from 'src/criminals/criminals.repository';
import { CreatePostDto } from './dtos/create.post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Posts.name) private readonly postsModel: Model<Posts>,
    private readonly criminaRepository: CriminalsRepository,
  ) {}

  async createPost(body: CreatePostDto) {
    const result = await this.postsModel.create(body);
    const _id = result._id;
    return { _id, ...body };
  }
}
