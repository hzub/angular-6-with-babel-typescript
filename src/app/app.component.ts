import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>{{title}}</h1>
      <div>The number: {{x}}</div>
    </div>
  `,
})
export class AppComponent {
  title = 'Working component!';
  x: number = 123;
}
