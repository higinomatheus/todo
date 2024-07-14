import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from '../models/todo.model';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, NgFor, NgIf],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	public todos: Todo[] = [];
	public title: String = 'Minas Tarefas';

	constructor() {
		this.todos.push(new Todo(1, 'Passear com o cachorro', false));
		this.todos.push(new Todo(2, 'Ir ao supermercado', true));
		this.todos.push(new Todo(3, 'Cortar o cabelo', false));
	}

	remove(todo: Todo) {
		const index = this.todos.indexOf(todo);
		if (index !== -1) {
			this.todos.splice(index, 1);
		}
	}

	markAsDone(todo: Todo) { 
		todo.done = true;
	}

	markAsUndone(todo: Todo) {
		todo.done = false;
	 }
}
