import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';
import { updateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [{
        id: "1",
        title: 'First Task',
        description: 'some task',
        status: TaskStatus.PENDING,
    }]

    getAllTasks() {
        return this.tasks;
    }
    createTask(title:string, description:string) {
    const tasks = {
        id: v4(),
        title,
        description,
        status: TaskStatus.PENDING
    }
    this.tasks.push(tasks);

    return tasks
    }

    deleteTask(id:string){
        this.tasks = this.tasks.filter(task => task.id !== id)
    }

    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id)
    }
    
    updateTask(id:string, updatedFields: updateTaskDto): Task{
        const task = this.getTaskById(id)
        const newTask = Object.assign(task, updatedFields)
        this.tasks.map(task => task.id === id ? newTask : task)
        return newTask;
    }
}
