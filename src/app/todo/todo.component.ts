import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material';

@NgModule({
  imports: [MatCheckboxModule]
})

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
