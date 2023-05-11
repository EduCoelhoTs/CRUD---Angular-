import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  public list = [
    'teste',
    'teste1',
    'teste2',
    'teste3',
    'teste4',
    'teste5',
  ]

  constructor() { }

  ngOnInit(): void {
    // interval(1000).subscribe(
    //   {
    //     next: () => this.form.addControl('name', new FormControl(''))
    //   }
    // )
  }

}
