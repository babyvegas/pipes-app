import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

    public isUpperCase: boolean = false;
    public heroes: Hero[] = [
      {
        name: 'Superman',
        canFly: true,
        color: Color.blue
      },
      {
        name: 'Batman',
        canFly: false,
        color: Color.black
      },
      {
        name: 'Daredevil',
        canFly: false,
        color: Color.red
      },
      { name: 'Spider-Man',
        canFly: false,
        color: Color.red
      },
      {
        name: 'Wonder Woman',
        canFly: true,
        color: Color.blue
      }
    ]

    toggleUpperCase(){
      this.isUpperCase = !this.isUpperCase;
    }
  }
