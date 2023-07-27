import { Controller, Get, Post, Delete, Body, Patch, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, updateTaskDto } from './dto/task.dto';


@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    return this.tasksService.createTask(newTask.title, newTask.description);
  }

  @Delete(':id')
  deleteTask(@Param('id') id:string){
    this.tasksService.deleteTask(id)
  }

  @Patch(':id')
  uptdateTask(@Param('id') id:string, @Body() updatedFields: updateTaskDto){
    return this.tasksService.updateTask(id, updatedFields)
  }
}
