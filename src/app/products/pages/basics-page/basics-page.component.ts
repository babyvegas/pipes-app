import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'donovan';
  public nameUpper: string = 'donovan';
  public fullName: string = 'dOnovAN bARRIentoS'

  public customDate: Date = new Date(); // current date
}
