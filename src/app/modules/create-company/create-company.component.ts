import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  data: any[] = [
    'Pedro', 'Carlos', 'Tiago', 'Eduardo'
  ]

  newData!: any[];

  constructor() { }

  ngOnInit(): void {
  }

  public checkValue($event: any): void {
    this.newData = this.data.filter(
      el => el.toLowerCase().includes($event.target.value)
    )
  }

}
