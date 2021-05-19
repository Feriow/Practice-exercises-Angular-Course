import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning-alert.component.html',
  styles: [
    `
      p {
        color: red;
        padding: 20px;
        background: mistyrose;
        border: 1px solid red;
        text-align: center;
      }
    `,
  ],
})
export class WarningAlertComponent {}
