import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from '../models/todo.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, NgFor, NgIf, ReactiveFormsModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	public mode: string = 'list';
	public todos: Todo[] = [];
	public title: String = 'Minhas Tarefas';
	public form: FormGroup;

	constructor(private fb: FormBuilder) {
		this.form = this.fb.group({
			title: ['', Validators.compose([
				Validators.minLength(3),
				Validators.maxLength(60),
				Validators.required
			])]
		});

		setTimeout(() => this.load(), 1000);
	}

	add() {
		const title = this.form.controls['title'].value;
		const id = this.todos.length + 1;
		this.todos.push(new Todo(id, title, false));
		this.save();
		this.clear();
	}

	clear() {
		this.form.reset();
	}

	remove(todo: Todo) {
		const index = this.todos.indexOf(todo);
		if (index !== -1) {
			this.todos.splice(index, 1);
			this.save();
		}
	}

	markAsDone(todo: Todo) {
		todo.done = true;
		this.save();
	}

	markAsUndone(todo: Todo) {
		todo.done = false;
		this.save();
	}

	save() {
		const data = JSON.stringify(this.todos);
		localStorage.setItem('todos', data);
	}

	load(){
		if(typeof localStorage !== 'undefined'){
			const data = localStorage.getItem('todos') || '';
			const items = JSON.parse(data);
			this.todos = items !== '' ? items : [];
		} else {
			console.warn('localStorage is not available');
		}
	}

	changeMode(mode: string){
		this.mode = mode;
	}
}
