import { Component } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-crud';

  observable = new Observable(
    observer => {
      observer.error('deu erro');
    }
  )

  retornaOf() {
    return of(new Error('error'))
  }

  ngOnInit(): void {
    this.observable.subscribe({
      next: response => console.log('caiu no next', response),
      error: err => console.log('caiu no erro', err)
    })
  }
}
