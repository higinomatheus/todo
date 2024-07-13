import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public todos: any[] = [];
  public title: String = 'Minas Tarefas';

  constructor() {
    this.todos.push('passear com o cachoro');
    this.todos.push('ir ao supermercado');
    this.todos.push('cortar o cabelo');
    this.todos.push(1999);
    this.todos.push(new Date());
  }

} 
