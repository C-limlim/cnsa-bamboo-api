import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Post,
	Res,
} from '@nestjs/common'

import { QuestionsService } from './questions.service'
import { Question } from '../entities'

@Controller('questions')
export class QuestionsController {
	constructor(private readonly reportsService: QuestionsService) {}

	@Get()
	async getAll(): Promise<Question[]> {
		return await this.reportsService.find()
	}

	@Get('random')
	async getRandomOne(): Promise<Question> {
		return await this.reportsService.getRandomOne()
	}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	async create(@Body('question') question: string, @Res() res) {
		try {
			await this.reportsService.create({ content: question })
		} catch (e) {
			if (e.code === 'ER_DUP_ENTRY') {
				res.status(HttpStatus.CONFLICT)
			} else {
				throw e
			}
		}
		res.send()
	}
}
