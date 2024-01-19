import { Body, Controller, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dtos/create.comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post(':id')
  async createComment(@Param('id') id: string, @Body() body: CreateCommentDto) {
    return this.commentsService.createComment(id, body);
  }
}
