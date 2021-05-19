import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /* styles: [
    `
      h3 {
        color: dodgerblue;
      }
      .corpo {
        padding-bottom: 50px;
      }
    `,
  ],*/
})
export class AppComponent {
  username = '';
  showSecret = false;
  clicks = [];

  onShowSecret() {
    this.showSecret = !this.showSecret;

    this.clicks.push(this.clicks.length + 1);
    console.log(this.clicks);
  }

  getColor(click) {
    return click >= 5 ? 'blue' : '';
  }
}
