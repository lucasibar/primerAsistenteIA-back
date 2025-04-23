
import { Controller, Post, Body, Res } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Response } from 'express';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('stream')
  async chatStream(@Body('mensaje') mensaje: string, @Res() res: Response) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    await this.chatService.responderConStream(mensaje, (chunk) => {
      res.write(`${chunk}`);
    });

    res.end();
  }
}
