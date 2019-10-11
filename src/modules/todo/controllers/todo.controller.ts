import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Todo } from '../entities/todo.entity';
import { TodoService } from '../services/todo.service';

@Crud({
    model: {
        type: Todo,
    },
})
@Controller('todo')
export class TodoController {
    constructor(public service: TodoService) {}
}
