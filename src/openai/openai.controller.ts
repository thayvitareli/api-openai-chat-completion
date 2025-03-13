import { Body, Controller, Post } from '@nestjs/common';
import { ChatCompletionMessageDto, CreateChatCompletionRequestDto } from './dto/chat-completion.dto';
import { OpenaiService } from './openai.service';

@Controller('openai')
export class OpenaiController {
    constructor(private readonly openaiService: OpenaiService){}
    @Post('chat-completion')
    async createChatCompletion(@Body() {messages}:CreateChatCompletionRequestDto){
        console.log(process.env.OPENAI_API_KEY)
        return this.openaiService.createChatCompletion(messages)
    }
}
