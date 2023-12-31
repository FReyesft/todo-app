import { Component, signal } from '@angular/core';
import { Task } from 'src/app/models/task.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Crear proyecto',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear Componentes',
      completed: false
    }
  ]);

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const title = input.value as string;
    this.addTask(title)
  }

  addTask(title: string) {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false
    }
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  deleteTask(id: number) {
    this.tasks.update((tasks) => tasks.filter((task, position) => position !== id));
  }

  handleCheck(task: Task){
    task.completed = !task.completed
  }
}
