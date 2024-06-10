import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  ///i18n Select
  public name: string = 'Donovan';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male' : 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void {
    this.name = 'Melissa';
    this.gender = 'female'
  }

  //i18n Plural
  public clients: string[] = ['Donovan', 'Melissa', 'Jhon', 'Doe', 'Jane'];
  public clientsMap = {
    '=0': 'no hay clientes esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }
  deleteClient():void {
    this.clients.pop();
  }

  //KeyValue Pipe
  public person = { name: 'Donovan', age: 25, address: 'Calle 123'};

  //Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('Timer', value)
  )
);

//Con una Promesa
public promiseValue: Promise<String> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Tenemos data de promesa');
    console.log( ' Tenemos data en la promesa');

  }, 3500);
});
}
