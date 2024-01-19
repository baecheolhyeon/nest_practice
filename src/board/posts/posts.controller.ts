import { Body, Controller, Post, Get } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiOperation } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create.post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiOperation({ summary: '게시글작성' })
  @Get()
  async getAllposts() {}

  @ApiOperation({ summary: '게시글작성' })
  @Post()
  async createPost(@Body() body: CreatePostDto) {
    return this.postsService.createPost(body);
  }
}
